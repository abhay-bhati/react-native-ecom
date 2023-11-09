const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Product = require('./model/product');
const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5ei76.mongodb.net/ReactNativeEcom?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connection successful')
});

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/get-products', async (req, res) => {
    try {
        const products = await Product.find({});
        console.log('products', products);
        res.json(products);
    } catch (error) {
        console.log("Error fetching products", error);
        res.status(500).json({message: "Error fetching products"})
    }
})

app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})