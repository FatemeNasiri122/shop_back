"use strict";
const User = require("../model/user");
const blacklistToken = require("../model/blacklistToken");
const Product = require("../model/product");
const { query, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.register = async (req, res, next) => {
    const result = validationResult(req);
    const { firstName, lastName, email, password, newsLetter } = req.body;
    if (result.isEmpty()) {
        try {
            const alreadyExist = await User.findOne({ email: req.body.email });
            if (alreadyExist) {
                const error = new Error("email already exists");
                error.statusCode = 400;
                throw error; 
            }
            const encryptedPassword = await bcrypt.hash(password, 12);
            const user = new User({ firstName: firstName, lastName: lastName, email: email, password: encryptedPassword, newsLetter: newsLetter, cart: { items: [] }, address: { items: [] }, favoriteProducts: { items: []} });
            const savedUser = await user.save();
            const token = jwt.sign({ savedUser }, "secret", { expiresIn: "2h" });
            res.status(200).json({ message: "Registration was successful", token, user });
        } catch (error) {
            next(error);
        }
    } else {
        const error = new Error("validation failed");
        error.statusCode = 400;
        throw error;
    }
}

exports.signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const savedUser = await User.findOne({ email });
        if (savedUser) {
            const isPasswordCorrect = await bcrypt.compare(password, savedUser.password);
            console.log(isPasswordCorrect);
            if (isPasswordCorrect) {
                const token = jwt.sign({ savedUser }, "secret", { expiresIn: "2h" });
                res.status(200).json({ message: "logged in successfully", token, user: savedUser });
            } else {
                const error = new Error("incorrect password");
                error.statusCode = 401;
                throw error;
            }
        } else {
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        next(error);
    }
    
}

exports.editUser = async (req, res, next) => {
    const id = req.user._id;
    const { firstName, lastName, email, phoneNumber, country, city, newsLetter } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { firstName, lastName, email, phoneNumber ,country ,city ,newsLetter});
        res.status(200).json({ user, message: "user edited successfully" });
    } catch (error) {
        next(error);
    }
}

exports.editPassword = async (req, res, next) => {
    const user = req.user;
    const result = validationResult(req);
    const { password, newPassword } = req.body;
    console.log(req.body);
    if (result.isEmpty()) {
        try {
            const isCurrentPasswordValid = await bcrypt.compare(password, user.password);
            console.log(isCurrentPasswordValid);
            if (isCurrentPasswordValid) {
                const encryptPassword = await bcrypt.hash(newPassword, 12);
                const updatedUser = await User.findByIdAndUpdate(user._id, { password: encryptPassword });
                next();
                // res.status(200).json({ updatedUser, message: "password changed successfully" });
            } else {
                const error = new Error("password invalid");
                error.statusCode = 401;
                throw error;
        }
        } catch (error) {
            next(error);
        }
    } else {
        const error = new Error("validation failed");
        error.statusCode = 429;
        throw error;
    }
}

exports.addAddress = async (req, res, next) => {
    const user = req.user;
    let newAddress = [];
    let isEditing = false;
    const { name, address, cityName, countryName, phoneNumber, _id } = req.body;
    try {
        console.log(req.body);
            if (user.address.items.length === 0) {
                newAddress = [{ name, address, cityName, countryName, phoneNumber, _id: new mongoose.mongo.ObjectId() }];
            } else {
                user.address.items.map((item) => {
                    console.log(item);
                    if (item._id.toString() === _id.toString()) {
                        item.name = name;
                        item.address = address;
                        item.countryName = countryName;
                        item.phoneNumber = phoneNumber;
                        isEditing = true;
                        return;
                    }
                });
                if (isEditing) {
                    newAddress = [...user.address.items];
                } else {
                    newAddress = [...user.address.items, { name, address, cityName,countryName, phoneNumber, _id: new mongoose.mongo.ObjectId() }];
                }
            }
            console.log(newAddress);
            const editedUser = await User.findByIdAndUpdate(user._id, { address: { items: newAddress } });
            console.log(editedUser);
            res.status(200).json({ editedUser, message: "address added succesfully" });
    } catch (error) {
        next(error);
    }
}

exports.deleteAddress = async (req, res, next) => {
    const user = req.user;
    const { _id } = req.body;
    const filterAddress = user.address.items.filter((item) => item._id.toString() !== _id.toString());
    const newAddress = {items: filterAddress}
    try {
        const updatedUser = await User.findByIdAndUpdate(user._id, { address: newAddress });
        res.status(200).json({ updatedUser, message: "address deleted succesfully" });
    } catch (error) {
        next(error);
    }
}

exports.addToFavorite = async (req, res, next) => {
    const user = req.user;
    const { product } = req.body;
    let newFavorite = [];
    let removeFavorite = false;
    // console.log(req.body);
    try {
        if (user.favoriteProducts.items.length === 0) {
            newFavorite = [product];
        } else {
            user.favoriteProducts.items.map((product) => {
                if (product._id.toString() === product._id.toString()) {
                    removeFavorite = true;
                    return;
                }
            });
            if (removeFavorite === true) {
                newFavorite = user.favoriteProducts.items.filter((item) => product._id.toString() !== item._id.toString());
            } else {
                newFavorite = [...user.favoriteProducts.items, product];
            }
        }
        console.log(newFavorite);
        const addedProduct = await User.findByIdAndUpdate(user._id, { favoriteProducts: {items: newFavorite} });
        res.status(200).json({addedProduct});
        } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.addToCart = async (req, res, next) => {
    const user = req.user;
    const { selectedColor, selectedSize, product } = req.body;
    console.log(req.body);
    try {
        let newCart = [];
        let notFound = true;
        let productCount = 0;
        let updatedProduct = {};
        let sumOfPrice = 0;
        const foundProduct = await Product.findById(product._id);
        if (foundProduct) {
            productCount = foundProduct.numberOfProduct > 0 ? foundProduct.numberOfProduct - 1 : 0;
            await Product.findByIdAndUpdate(product._id, {numberOfProduct: productCount});
        } else {
            const error = new Error("product not found");
            error.statusCode = 404;
            throw error;
        }
        if (user.cart.items.length === 0) {
            sumOfPrice = foundProduct.price;
            newCart = [{ product: { ...foundProduct }, selectedSize: [selectedSize], selectedColor: [selectedColor], count: 1, sumOfPrice ,_id: new mongoose.mongo.ObjectId() }];
        } else {                
            newCart = user.cart.items.map((item) => {
                console.log(item);
                if (item.product._id.toString() === foundProduct._id.toString() && foundProduct.numberOfProduct > 0) {
                    item.count = item.count + 1;
                    item.sumOfPrice = item.product.price * item.count;
                    item.selectedColor = [...item.selectedColor, selectedColor];
                    item.selectedSize = [...item.selectedSize, selectedSize];
                    notFound = false;
                }
                return item;
            })
            if (notFound) {
                sumOfPrice = foundProduct.price;
                newCart = [...user.cart.items, {product: {...foundProduct}, selectedSize: [selectedColor], selectedColor: [selectedSize], sumOfPrice,count: 1,_id: new mongoose.mongo.ObjectId()}];
            }
        }
        console.log(newCart);
        const totalOrders = newCart.reduce((accumulator, item) => accumulator + item.count, 0);
        const totalPrice = newCart.reduce((accumulator, item) => accumulator + item.sumOfPrice, 0);
        console.log(totalOrders);
        console.log(totalPrice);
        const updatedUser = await User.findByIdAndUpdate(user._id, { cart: { items: newCart, totalOrders, totalPrice } });
        console.log(updatedUser)
        res.status(200).json({updatedUser});
    } catch (error) {
        next(error);
    }
    
}

exports.removeFromCart = async (req, res, next) => {
    const user = req.user;
    const { product } = req.body;
    try {
        let newCart = [];
        let productCount = 0;
        let sumOfPrice = 0;
        console.log(req.body);
        console.log(user);
        newCart = user.cart.items.filter((item) => {
            if (item.product._id.toString() === product._id.toString()) {
                productCount = item.count;
            }
            return item.product._id.toString() !== product._id.toString();   
        });
        const foundProduct = await Product.findById(product._id);
        if (foundProduct) {
            productCount = foundProduct.numberOfProduct > 0 ? foundProduct.numberOfProduct + productCount : 0;
            await Product.findByIdAndUpdate(product._id, {numberOfProduct: productCount});
        } else {
            const error = new Error("product not found");
            error.statusCode = 404;
            throw error;
        }
        console.log(newCart);
        const totalOrders = newCart.reduce((accumulator, item) => accumulator + item.count, 0);
        const totalPrice = newCart.reduce((accumulator, item) => accumulator + +item.sumOfPrice , 0);
        const updatedUser = await User.findByIdAndUpdate(user._id, { cart: { items: newCart, totalOrders, totalPrice } });
        console.log(updatedUser)
        res.status(200).json({updatedUser, message: "product removed from cart"});
    } catch (error) {
        next(error);
    }
}

exports.reduceCart = async (req, res, next) => {
    const user = req.user;
    const { product } = req.body;
    try {
        let newCart = [];
        let sumOfPrice = 0;
        let productCount = 0;
        const foundProduct = await Product.findById(product._id);
        if (foundProduct) {
            productCount = foundProduct.numberOfProduct > 0 ? foundProduct.numberOfProduct + 1 : 0;
            await Product.findByIdAndUpdate(product._id, {numberOfProduct: productCount});
        } else {
            const error = new Error("product not found");
            error.statusCode = 404;
            throw error;
        }
        console.log(req.body);
        console.log(user);
        newCart = user.cart.items.map((item) => {
            if (item.product._id.toString() === product._id.toString() && foundProduct.numberOfProduct > 0) {
                item.count = item.count - 1;
                item.sumOfPrice = item.product.price * item.count;
            }
            return item;
        });
        console.log(newCart);
        const totalOrders = newCart.reduce((accumulator, item) => accumulator + item.count, 0);
        const totalPrice = newCart.reduce((accumulator, item) => accumulator + +item.sumOfPrice, 0);
        const updatedUser = await User.findByIdAndUpdate(user._id,{cart: { items: newCart, totalOrders, totalPrice }});
        console.log(updatedUser)
        res.status(200).json({updatedUser});
    } catch (error) {
        next(error);
    }
}

exports.logout = async (req, res, next) => {
    const token = req.get("token");
    try {
        const blakcklist = new blacklistToken({ token: token });
        const savedBlacklist = await blakcklist.save();
        res.json({ message: "you have been succsessfully logged out" });
    } catch (error) {
        next(error);
    }
}