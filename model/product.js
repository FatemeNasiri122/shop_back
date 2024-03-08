"use strict";
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    colors: {
        type: Array,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    numberOfProduct: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("product", productSchema);