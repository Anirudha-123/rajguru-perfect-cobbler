import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  beforeImage: { type: String, required: true },
  afterImage: { type: String, required: true }
}, { timestamps: true });

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;