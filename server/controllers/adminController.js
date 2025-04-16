import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../utils/appError.js';
import dotenv from 'dotenv';

dotenv.config();

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register Admin
export const registerAdmin = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const adminExists = await Admin.findOne({ username });
  if (adminExists) return next(new AppError("Admin already exists", 400));

  const adminCount = await Admin.countDocuments();
  if (adminCount > 0) return next(new AppError("Only one admin account allowed", 400));

  const admin = await Admin.create({ username, password });
  const token = generateToken(admin._id);

  res.status(201).json({
    _id: admin._id,
    username: admin.username,
    token,
  });
});

// Login Admin
export const loginAdmin = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin || !(await admin.matchPassword(password))) {
    return next(new AppError("Invalid credentials", 401));
  }

  const token = generateToken(admin._id);

  res.json({
    _id: admin._id,
    username: admin.username,
    token,
  });
});




// Add this logout controller
export const logoutAdmin = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next(new AppError('No token provided', 400));

  const admin = await Admin.findById(req.admin._id);
  admin.tokens = admin.tokens.filter(t => t.token !== token);
  await admin.save();

  res.status(200).json({ message: 'Logged out successfully' });
});