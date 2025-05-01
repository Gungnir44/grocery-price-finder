const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joshuambyrd3:a6CgAVarIxk3IkVB@cluster0.lxay4bv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: 'groceryDB'
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
