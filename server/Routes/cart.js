const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart");


// get all cart products
router.get("/fetchcart", authUser, async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.user.id })
            .populate("productId", "name price image rating type")
            .populate("user", "name email");
        res.send(cart);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});