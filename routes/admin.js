const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const products = [];
const productControllers = require('../controllers/products')
//add-product with get request
router.get('/add-product', productControllers.getAddProduct);

//add-product with post request
router.post('/add-product', productControllers.postAddProduct);

module.exports = router;