const Product = require('../Models/Product')

module.exports = class ProductController {
    static async showProducts(req, res) {
        const products = await Product.getProducts()
        res.render('products/all', { products })
    }
    static async createProduct(req, res) {
        res.render('products/create')
    }
    static async showProductsPost(req, res) {
        const { name, image, price, description } = req.body

        const product = new Product(name, image, price, description)

        product.save()

        res.redirect('/products')
    }

}