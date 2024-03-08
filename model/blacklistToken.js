"use strict";
const mongoose = require("mongoose");

const BlackList = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        ref: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("blacklist", BlackList);