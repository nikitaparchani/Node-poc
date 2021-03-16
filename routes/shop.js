const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin')


router.get('/',(req, res, next) =>{
    console.log("shop.js", adminData.products);
    // path join automatically detects the operating system and joins the path in windows(\user\data.js) in linux (/data/user.js)
    res.render('shop')
});
module.exports = router;
