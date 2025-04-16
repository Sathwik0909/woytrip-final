import Card from "../models/Card.js";
import cloudinary from "../config/cloudinary.js";
import { AppError } from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});



// @desc    Create a new card
// @route   POST /api/cards
// @access  Private
export const createCard = catchAsync(async (req, res, next) => {
  const { title, location, features, popular } = req.body;
  const uploadedImages = req.uploadedImages;

  if (!title || !location || !uploadedImages) {
    return next(new AppError('Missing required fields', 400));
  }

  let parsedFeatures = features;
  if (typeof features === 'string') {
    try {
      parsedFeatures = JSON.parse(features);
    } catch (error) {
      return next(new AppError('Invalid features format', 400));
    }
  }

  const card = await Card.create({
    title,
    location,
    images: uploadedImages,
    features: parsedFeatures,
    popular: popular === 'true' || popular === true
  });

  res.status(201).json(card);
});

// @desc    Get all cards
// @route   GET /api/cards
// @access  Public
export const getCards = catchAsync(async (req, res, next) => {
  const cards = await Card.find({}).sort({ createdAt: -1 });
  res.json(cards);
});

// @desc    Update a card
// @route   PUT /api/cards/:id
// @access  Private
export const updateCard = catchAsync(async (req, res, next) => {
  const card = await Card.findById(req.params.id);
  if (!card) return next(new AppError('Card not found', 404));

  // Handle image deletions
  if (req.body.deleteImages) {
    try {
      const deleteImages = JSON.parse(req.body.deleteImages);
      
      // Remove from Cloudinary
      await Promise.all(
        deleteImages.map(publicId => 
          cloudinary.v2.uploader.destroy(publicId, {
            resource_type: 'image',
            type: 'upload',
            invalidate: true
          })
        )
      );

      // Remove from database
      card.images = card.images.filter(
        img => !deleteImages.includes(img.publicId)
      );
    } catch (error) {
      console.error('Deletion error:', error);
      return next(new AppError('Image cleanup failed', 500));
    }
  }

  // Add new images
  if (req.uploadedImages?.length) {
    card.images.push(...req.uploadedImages);
  }

  // Update other fields
  card.title = req.body.title || card.title;
  card.location = req.body.location || card.location;
  card.popular = req.body.popular === "true";
  
  try {
    card.features = JSON.parse(req.body.features);
  } catch {
    return next(new AppError('Invalid features format', 400));
  }

  const updatedCard = await card.save();
  
  res.status(200).json({
    status: 'success',
    data: updatedCard.toObject({ getters: true })
  });
});


// @desc    Delete a card
// @route   DELETE /api/cards/:id
// @access  Private
export const deleteCard = catchAsync(async (req, res, next) => {
  const card = await Card.findById(req.params.id);
  if (!card) return next(new AppError('Card not found', 404));

  // Delete all images from Cloudinary
  const publicIds = card.images.map(image => image.publicId);
  try {
    await Promise.all(publicIds.map(publicId =>
      cloudinary.v2.uploader.destroy(publicId)
    ));
  } catch (error) {
    console.error('Error deleting images:', error);
  }

  await card.deleteOne();
  res.json({ message: 'Card removed' });
});