"use strict";
const Order = require("../model/order");
const User = require("../model/user");
const Product = require("../model/product");

exports.addOrder = async (req, res, next) => {
    const user = req.user;
    console.log(req.body);
    try {
        user.cart.items.map(async (item) => {
            const foundProduct = await Product.findById(item.product._id);
            if (foundProduct) {
                const productCount = +foundProduct.numberOfProduct > 0 ? +foundProduct.numberOfProduct - item.count : +foundProduct.numberOfProduct;
                if (productCount < 0) {
                    console.log("error");
                    return;
                }
                const updatedProduct = await Product.findByIdAndUpdate(foundProduct._id, { numberOfProduct: productCount, });
                console.log(updatedProduct);
            } else {
                const error = new Error("product not found");
                error.statusCode = 404;
                throw error;
            }
        });
        const order = new Order({ cart: user.cart, user: { firstName: user.firstName, lastName: user.lastName, email: user.email},selectedAddress: req.body.selectedAddress , userId: user._id, orderCode: Math.floor(100000 + Math.random() * 900000) });
        const savedOrder = await order.save();
        const editUser = await User.findByIdAndUpdate(user._id, { cart: { items: [] } });
        res.status(200).json({ message: "order added successfully" });
    } catch (error) {
        next(error);
    }
}

exports.getOrder = async (req, res, next) => {
    const id = req.user._id;
    console.log(id);
    try {
        const order = await Order.find({ userId: id }).sort({ createdAt: -1 });
        console.log(order);
        res.status(200).json({ order });
    } catch (error) {
        next(error);    
    }
}