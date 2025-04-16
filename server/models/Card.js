// import mongoose from "mongoose";

// const CardSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   location: { type: String, required: true },
//   imageUrl: { type: String, required: true },
//   imagePublicId: { type: String,required: true },
//   features: {
//     video: { type: Boolean, default: false },
//     meals: { type: Boolean, default: false },
//     stay: { type: Boolean, default: false },
//     sightseeing: { type: Boolean, default: false },
//     medical: { type: Boolean, default: false },
//     transport: { type: Boolean, default: false }
//   },
//   popular: { type: Boolean, default: false }
// },{timestamps:true});

// const Card = mongoose.model("Card", CardSchema);
// export default Card;


import mongoose from "mongoose";


const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  images: [{
    url: { type: String, required: true },
    publicId: { type: String, required: true }
  }],
  features: {
    video: { type: Boolean, default: false },
    meals: { type: Boolean, default: false },
    stay: { type: Boolean, default: false },
    sightseeing: { type: Boolean, default: false },
    medical: { type: Boolean, default: false },
    transport: { type: Boolean, default: false }
  },
  popular: { type: Boolean, default: false }
}, { timestamps: true });


const Card = mongoose.model("Card", CardSchema);
export default Card;