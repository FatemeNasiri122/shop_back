"use strict";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    newsLetter: {
        required: true,
        type: Boolean,
    },
    cart: {
        required: true,
        type: Object
    },
    phoneNumber: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: Object
    },
    favoriteProducts: {
        type: Object
    },
}, {timestamps: true});

module.exports = mongoose.model("user", userSchema);