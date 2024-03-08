"use strict";
const express = require("express");
const order = require("../controler/order");
const isAthenticated = require("../middleware/isAuthenticated");

const routes = express.Router();

routes.post("/add-order", isAthenticated.isAthenticated, order.addOrder);
routes.get("/get-order", isAthenticated.isAthenticated, order.getOrder);


module.exports = routes;