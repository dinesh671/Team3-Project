const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');

// to fetch all products
router.get('/fetchproduct', async (req, res) => {
    try {

        const product = await Product.find()
        res.send(product)
    }
    catch (error) {

        res.status(500).send("Something went wrong")
    }
})


module.exports = router;