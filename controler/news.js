"use strict";
const News = require("../model/news");

const formatDate = () => {
    
}

exports.getNews = async (req, res, next) => {
    const page = +req.query.page || 1;
    const { from, to } = req.query;
    const limit = 4;

    try {
        const totalNewsNumber = await News.countDocuments();
        const newsItems = await News.find().limit(limit * 1).skip((page - 1) * limit).sort({createdAt: 1});
        res.status(200).json({ news: newsItems, totalNewsNumber });
    } catch (error) {
        next(error);
    }
    
}

exports.getSingleNews = async (req, res, next) => {
    try {
        const singleNews = await News.findById(req.params.id);
        res.status(200).json(singleNews);
    } catch (error) {
        next(error)
    }
}

exports.addNews = async (req, res, next) => {
    try {
        const news = new News({ title: req.body.title, content: req.body.content, smallImage: req.body.smallImage, bigImage: req.body.bigImage, keywords: req.body.keywords, category: req.body.category, date: req.body.date });
        const savedNews = await news.save();
    } catch (error) {
        next(error);
    }
}