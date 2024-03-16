"use strict";
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const BlacklistToken = require("../model/blacklistToken");

module.exports.isAthenticated = async (req, res, next) => {
    const token = req.get("token");
    try {
        if (token) {
            const verifyToken = jwt.verify(token, "secret");
            const blakcklist = await BlacklistToken.findOne({ token: token });
            if (blakcklist) {
                const error = new Error("This session has expired. Please login");
                error.statusCode = 401;
                throw error;
            }
            if (verifyToken) {
                const user = await User.findById(verifyToken.savedUser._id);
                if (user) {
                    req.user = user;
                    next();
                } else {
                    const error = new Error("user not found");
                    error.statusCode = 404;
                    throw error;
                }
            } else {
                // const error = new Error("user not found");
                // error.statusCode = 404;
                // throw error;
                next();
            }
        } else {
            // const error = new Error("no user found");
            // error.statusCode = 404;
            // throw error;
            next();
        } 
    } catch (error) {
        next(error);
    }
}