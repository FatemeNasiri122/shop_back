"use strict";
const express = require("express");

const auth = require("../controler/auth");
const validation = require("../middleware/validation");
const athenticate = require("../middleware/isAuthenticated");

const routes = express.Router();

routes.post("/register", validation.registerValidation, auth.register);
routes.post("/signin", auth.signin);
routes.post("/logout", athenticate.isAthenticated, auth.logout);
routes.post("/edit-user", athenticate.isAthenticated, auth.editUser);
routes.post("/edit-password", validation.editPasswordValidation, athenticate.isAthenticated, auth.editPassword, auth.logout);
routes.post("/add-address", athenticate.isAthenticated, auth.addAddress);
routes.post("/add-to-favorite", athenticate.isAthenticated, auth.addToFavorite);
routes.post("/add-to-cart", athenticate.isAthenticated, auth.addToCart);
routes.post("/reduce-from-cart", athenticate.isAthenticated, auth.reduceCart);
routes.post("/remove-from-cart", athenticate.isAthenticated, auth.removeFromCart);
routes.post("/delete-address", athenticate.isAthenticated, auth.deleteAddress);

module.exports = routes;