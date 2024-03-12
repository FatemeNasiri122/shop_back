"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const auth = require("./routes/auth");
const contact = require("./routes/contact");
const news = require("./routes/news");
const product = require("./routes/product");
const order = require("./routes/order");
const verifyToken = require("./middleware/isAuthenticated");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://shop-front-black.vercel.app"
}));
// app.use(cors());
app.use(helmet());

app.use(auth);
app.use(contact);
app.use(news);
app.use(product);
app.use(order);

app.get("/verify-token", verifyToken.isAthenticated, (req, res, next) => {
  const user = req.user;
  if (req.user) {
    res.status(200).json({ user });
  } else {
    const error = new Error("user not found");
    error.statusCode = 401;
    throw error;
  }
});

app.use((error, req, res, next) => {
  error.status = error.statusCode || 500;
  res.status(error.status).json({ message: error.message || "something went wrong please try again" });
});

(async () => {
  try {
    await mongoose.connect(process.env.URL, {dbName: "test"})
  } catch (e) {
    const error = new Error("incorrect");
    // error.statusCode = 401;
    throw error;
  }
})();

app.listen(8080);