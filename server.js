const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb+srv://joshuambyrd3:a6CgAVarIxk3IkVB@cluster0.lxay4bv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: 'groceryDB'
})
.then(() => console.log('✅ MongoDB Atlas connected successfully!'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Schema & Model
const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    store: String,
    location: String
});
const Item = mongoose.model('Item', ItemSchema);

// API routes
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/cheapest', async (req, res) => {
    try {
        const { item } = req.query;
        const cheapest = await Item.find({ name: item }).sort({ price: 1 }).limit(1);
        res.json(cheapest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Catch-all for unmatched routes (optional, helps debug)
app.use((req, res) => {
    res.status(404).send('Not Found: ' + req.originalUrl);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
