import express from 'express';
import ServiceOrder from '../models/ServiceOrder.js';

const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await ServiceOrder.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  try {
    const newOrder = new ServiceOrder(req.body);
    const savedOrder = await newOrder.save();
    console.log('New Order Saved:', savedOrder);
    res.status(201).json({ success: true, message: 'Pickup booked successfully!', data: savedOrder });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;