// Express.js Backend (server.js)
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/groceryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully!'))
.catch(err => console.log('❌ MongoDB connection error:', err));
// Define Schema & Model
const ItemSchema = new mongoose.Schema({
name: String,
price: Number,
store: String,
location: String
});
const Item = mongoose.model('Item', ItemSchema);
// API Routes
app.get('/api/items', async (req, res) => {
const items = await Item.find();
res.json(items);
});
app.get('/api/cheapest', async (req, res) => {
const { item } = req.query;
const cheapest = await Item.find({ name: item }).sort({ price: 1 }).limit(1);
res.json(cheapest);
});
app.listen(5000, () => console.log('Server running on port 5000'));
