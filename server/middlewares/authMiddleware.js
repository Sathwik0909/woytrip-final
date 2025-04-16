import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";
import Admin from "../models/Admin.js";

export const protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return next(new AppError("Not authenticated", 401));

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find admin (No need to check for token existence in DB)
    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) return next(new AppError("Admin not found", 401));

    req.admin = admin;
    next();
  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }
});
