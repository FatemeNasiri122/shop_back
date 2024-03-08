"use strict";
const Contact = require("../model/contact");

exports.contact = async (req, res, next) => {
    const { name, email, phoneNumber, typeOfRequest, message, user } = req.body;
    try {
        const contact = new Contact({ name, email, phoneNumber, typeOfRequest, message, user });
        await contact.save();
        res.status(200).json({ message: "Thank you for getting in touch! We appreciate you contacting us." });
    } catch (error) {
        next(error);
    }
    
}