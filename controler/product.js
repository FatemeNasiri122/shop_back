"use strict";
const Product = require("../model/product");

exports.getProducts = async (req, res, next) => {
    const type = req.params.type;
    const page = req.query.page || 1;
    const category = req.query.category || "";
    let color = req.query.color || "";
    let size = req.query.size || "";
    const sortby = req.query.sortby || "";
    const isFilterNotActive = category === "" && color === "" && size === "" && sortby === "";
    const isFilterNotActive2 = category === "" && color === "" && size === "";
    if (typeof size === "string") {
        size = [size];
    }
    if (typeof color === "string") {
        color = [color];
    }
    try {
        let totalItems = await Product.find({ type }).countDocuments();;
        let products = [];
        if (isFilterNotActive) {     
            products = await Product.find({ type }).skip((page - 1) * 8).limit(8).find({ type });
            res.status(200).json({ products, totalItems });
            return;
        } else {
            if (sortby === "cheapest" && !isFilterNotActive2) {
                products = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color }  }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }, {}, { skip: (page - 1) * 8, limit: 8 }).sort({ price: 1 });
                totalItems = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color }  }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }).countDocuments();
            } else if (sortby === "most expensive" && !isFilterNotActive2) {
                products = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }, {}, { skip: (page - 1) * 8, limit: 8 }).sort({ price: -1 });
                totalItems = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }).countDocuments();
            } else if (sortby === "cheapest") {
                products = await Product.find({ type }, {}, { skip: (page - 1) * 8, limit: 8 }).sort({ price: 1 });
            } else if (sortby === "most expensive") {
                products = await Product.find({ type }, {}, { skip: (page - 1) * 8, limit: 8 }).sort({ price: -1 });
            } else {
                products = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }, {}, { skip: (page - 1) * 8, limit: 8 });
                totalItems = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }).countDocuments();
            }
            res.status(200).json({ products, totalItems });
        }

    } catch (error) {
        next(error);
    }
}

exports.getProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
}

exports.suggestedProducts = async (req, res, next) => {
    try {
        const products = await Product.find({ suggested: true });
        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
}