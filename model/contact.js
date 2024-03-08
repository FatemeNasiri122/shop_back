"use strict";
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phoneNumber: {
        type: String
    },
    typeOfRequest: {
        required: true,
        type: String
    },
    message: {
        type: String
    },
    user: {
        type: Object,
    }
}, {timestamps: true});

module.exports = mongoose.model("contact", contactSchema);