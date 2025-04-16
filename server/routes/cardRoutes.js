// import express from 'express';
// import { upload } from '../config/multerConfig.js';
// import { uploadImage } from '../middlewares/uploadMiddleware.js';
// import { createCard, deleteCard, getCards, updateCard } from '../controllers/cardController.js';
// import { protect } from '../middlewares/authMiddleware.js'; // Import protect middleware

// const cardRouter = express.Router();

// // Public routes
// cardRouter.get("/", getCards);

// // Protected admin routes
// cardRouter.post("/upload", 
//   protect,
//   upload.single("image"), 
//   uploadImage, 
//   createCard
// );

// cardRouter.put("/:id", 
//   protect,
//   upload.single("image"), 
//   updateCard
// );

// cardRouter.delete("/:id", 
//   protect,
//   deleteCard
// );

// export default cardRouter;


import express from 'express';
import { uploadImages } from '../middlewares/uploadMiddleware.js'
import { createCard, getCards, updateCard, deleteCard } from '../controllers/cardController.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/upload', upload.array('images'), uploadImages(true), createCard);
router.get('/', getCards);
router.put('/:id', upload.array('images'), uploadImages(false), updateCard);
router.delete('/:id', deleteCard);

export default router;