"use strict";
const { body } = require('express-validator');

module.exports.registerValidation = [body("firstName").notEmpty().isLength({ max: 15 }), body("lastName").notEmpty().isLength({ max: 15 }), body("email").matches(/\S+@\S+\.\S+/), body("password").matches(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)];

module.exports.contactValidation = [body("name").notEmpty().isLength({ max: 15 }), body("email").matches(/\S+@\S+\.\S+/), body("typeOfRequest").notEmpty()];

module.exports.editPasswordValidation = [body("password").matches(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/), body("newPassword").matches(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),body("confirmPassword").matches(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]