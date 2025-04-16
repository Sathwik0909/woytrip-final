import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import { corsOptions, corsLogger } from './config/corsConfig.js';

// Import routes
import adminRoutes from './routes/adminRoutes.js';
import cardRouter from './routes/cardRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import mailRoutes from './routes/mailRoutes.js';

import placesMail from './routes/placesMail.js'



// Configure environment variables
dotenv.config();

// Connect to database
connectDB();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security headers middleware
app.use(helmet());

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// API routes with versioning
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/cards', cardRouter);
app.use('/api/v1/mail', mailRoutes);
app.use('/api/v1/places', placesMail);

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`\nServer environment: ${process.env.NODE_ENV || 'development'}`);
  corsLogger.logAllowedOrigins();
  console.log(`Database: ${process.env.MONGO_URI}`);
  console.log(`Server running on port ${PORT}\n`);
});