const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/groceryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    store: String,
    location: String
});
const Item = mongoose.model('Item', ItemSchema);

const items = [
    { name: 'Milk', price: 2.99, store: 'Walmart', location: 'Downtown' },
    { name: 'Milk', price: 3.49, store: 'Target', location: 'Uptown' },
    { name: 'Bread', price: 1.99, store: 'Aldi', location: 'Downtown' },
    { name: 'Eggs', price: 3.99, store: 'Walmart', location: 'Downtown' },
    { name: 'Eggs', price: 4.29, store: 'Target', location: 'Uptown' }
];

Item.insertMany(items).then(() => {
    console.log('✅ Data seeded!');
    mongoose.connection.close();
});
