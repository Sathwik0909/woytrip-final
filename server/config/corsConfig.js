import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [
  process.env.CLIENT_DEV_URL, // Vite dev server (http://localhost:5173)
  process.env.CLIENT_PROD_URL // Production domain
];

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (server-to-server or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Blocked by CORS: ${origin} not allowed`));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 86400 // 24 hours cache
};

export const corsLogger = {
  logAllowedOrigins: () => {
    console.log('Allowed CORS origins:');
    allowedOrigins.forEach(origin => console.log(`- ${origin}`));
  }
};