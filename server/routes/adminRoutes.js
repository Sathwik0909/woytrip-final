// routes/adminRoutes.js
import express from 'express';
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin
} from '../controllers/adminController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Admin registration route
router.post('/register', registerAdmin);

// Admin login route
router.post('/login', loginAdmin);

// Admin logout route
// router.post('/logout',protect, logoutAdmin);

export default router;