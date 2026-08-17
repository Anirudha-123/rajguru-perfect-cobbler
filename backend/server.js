import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import orderRoutes from './routes/orders.js';
import Gallery from './models/Gallery.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('The Perfect Cobbler API is running...');
});




// Get all gallery items
app.get('/api/gallery', async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch gallery items' });
  }
});

// Add new Before/After pair (Admin only)
app.post('/api/gallery', async (req, res) => {
  try {
    const newItem = new Gallery(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add gallery item' });
  }
});

// Delete gallery item (Admin only)
app.delete('/api/gallery/:id', async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/rajguru-cobbler';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.log('Database connection error:', err.message));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});