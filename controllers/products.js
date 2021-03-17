const Product = require("../models/product")

exports.getAddProduct = (req, res, next) =>    {
    res.render('addProduct',
    {pageTitle:"Add Product", path:"/admin/add-product"});
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};
exports.getProduct = (req, res, next) =>{
    // path join automatically detects the operating system and joins the path in windows(\user\data.js) in linux (/data/user.js)
    const products = Product.fetchAll((products => {
        res.render('shop', {prods: products, pageTitle: "Shop" , path:"/", hasProducts: products.length > 0})
    }));
}

