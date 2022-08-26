const Product = require('../Models/Product')

module.exports = class ProductController{
    static showProducts(req, res){
        res.render('products/all')
    }
}