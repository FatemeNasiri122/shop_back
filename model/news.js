"use strict";
const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: String,
    },
    smallImage: {
        required: true,
        type: String,
    },
    bigImage: {
        required: true,
        type: String,
    },
    keywords: {
        required: true,
        type: Array
    },
    category: {
        required: true,
        type: String
    },
}, {timestamps: true});

module.exports = mongoose.model("news", newsSchema);