"use strict";
const express = require("express");

const contact = require("../controler/contact");
const validation = require("../middleware/validation");

const routes = express.Router();

routes.post("/contact-us", validation.contactValidation, contact.contact);

module.exports = routes;