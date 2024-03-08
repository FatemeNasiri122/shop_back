"use strict";
const express = require("express");

const news = require("../controler/news");

const routes = express.Router();

routes.get("/news", news.getNews);
routes.get("/get-single-news/:id", news.getSingleNews);
routes.post("/add-news", news.addNews);

module.exports = routes;