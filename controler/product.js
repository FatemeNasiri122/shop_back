"use strict";
const Product = require("../model/product");

exports.getProducts = async (req, res, next) => {
    console.log(req.query);
    const type = req.params.type;
    const page = req.query.page || 1;
    const category = req.query.category || "";
    let color = req.query.color || "";
    let size = req.query.size || "";
    const sortby = req.query.sortby || "";
    const isFilterNotActive = category === "" && color === "" && size === "" && sortby === "";
    const isFilterNotActive2 = category === "" && color === "" && size === "";
    console.log(isFilterNotActive);
    if (typeof size === "string") {
        size = [size];
    }
    if (typeof color === "string") {
        color = [color];
    }
    try {
        let totalItems = await Product.find({ type }).countDocuments();
        let products = [];
        if (isFilterNotActive) {     
        products = await Product.find().skip((page - 1) * 4).limit(4).find({ type });
            res.status(200).json({ products, totalItems });
            return;
        } else {
            if (sortby === "cheapest" && !isFilterNotActive2) {
                products = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color }  }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }, {}, { skip: (page - 1) * 4, limit: 4 }).sort({ price: 1 });
                totalItems = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color }  }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }).countDocuments();
            console.log(products);
            } else if (sortby === "most expensive" && !isFilterNotActive2) {
                products = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }, {}, { skip: (page - 1) * 4, limit: 4 }).sort({ price: -1 });
                totalItems = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }).countDocuments();
            console.log(products);
            } else if (sortby === "cheapest") {
                products = await Product.find({ type }, {}, { skip: (page - 1) * 4, limit: 4 }).sort({ price: 1 });
                console.log(products);
            } else if (sortby === "most expensive") {
                products = await Product.find({ type }, {}, { skip: (page - 1) * 4, limit: 4 }).sort({ price: -1 });
                console.log(products);
            } else {
                console.log("koft")
                products = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }, {}, { skip: (page - 1) * 4, limit: 4 });
                totalItems = await Product.find({
                    $and: [
                        { $or: [{ 'color': { $all: color } }, { 'size': { $all: size } }, { 'category': category }] },
                        { $or: [{ 'type': type }] },
                    ]
                }).countDocuments();
            }
            console.log(products)
            res.status(200).json({ products, totalItems });
        }

    } catch (error) {
        console.log(error);
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