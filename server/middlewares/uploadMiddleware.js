import cloudinary from '../config/cloudinary.js';
import { AppError } from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary (Ensure environment variables are set)
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Cloudinary environment variables are not set!');
}


export const uploadImages = (required) => catchAsync(async (req, res, next) => {
  if (required && (!req.files || req.files.length === 0)) {
    return next(new AppError('No files uploaded', 400));
  }

  if (!req.files || req.files.length === 0) return next();

  const uploadPromises = req.files.map(file => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { folder: 'card_gallery', use_filename: true },
        (error, result) => {
          if (error) reject(error);
          else resolve({ url: result.secure_url, publicId: result.public_id });
        }
      );
      uploadStream.end(file.buffer);
    });
  });

  try {
    req.uploadedImages = await Promise.all(uploadPromises);
    next();
  } catch (error) {
    return next(new AppError('Failed to upload images to Cloudinary', 500));
  }
});