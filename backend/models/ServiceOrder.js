import mongoose from 'mongoose';

const serviceOrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true, default: '+91 77418 64763' },
  serviceType: { type: String, required: true },
  shoeBrand: { type: String, required: true },
  pickupAddress: { type: String, required: true },
  pickupDate: { type: String, required: true }, // Added pickup date
  specialInstructions: { type: String },
  status: { type: String, default: 'Order Received' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ServiceOrder', serviceOrderSchema);