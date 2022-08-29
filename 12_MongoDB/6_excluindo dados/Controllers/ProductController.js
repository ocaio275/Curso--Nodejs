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

    static async getProduct(req, res){
        const id = req.params.id

        const product = await Product.getProductByID(id)

        res.render('products/product', { product })
    }

    static async deleteProduct(req, res){
        const id = req.params.id

         await Product.deleteProductByID(id)

        res.redirect('/products')
    }

}