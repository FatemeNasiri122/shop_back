"use strict";
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cart: {
        type: Object,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    orderCode: {
        type: Number,
        required: true,
    },
    selectedAddress: {
        type: Object,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("order", orderSchema);