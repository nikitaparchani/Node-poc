const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const products = [];

//add-product with get request
router.get('/add-product',(req, res, next) =>{
    res.sendFile(path.join(rootDir,'views','addProduct.html'));
});

//add-product with post request
router.post('/add-product',(req, res, next) =>{
    products.push({title: req.body.title})
    console.log(products);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;