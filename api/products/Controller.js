const mongoose = require('mongoose')
require('dotenv').config()
const Product = require('./Schema');

const getProducts = (req, res) => {
    res.json({
        products: [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
        ]

    })
}



const postProducts = async (req, res) => {
    const { id, title, price, brand, category, images } = req.body;
    console.log({ id, title, price, brand, category, images });
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");

        // Create a new instance of the Product model
        const newProduct = new Product({
            id,
            title,
            price,
            brand,
            category,
            images,
        });

        // Save the new product to the database
        await newProduct.save();

        res.status(208).json({
            message: "Product Added Successfully",
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};


module.exports = { getProducts, postProducts }