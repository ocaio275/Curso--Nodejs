const express = require('express')
const router = express.Router()

const ProductController = require('../Controllers/ProductController')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.showProductsPost)
// router.get('/', ProductController.showProducts)
// router.get('/edit/:id', ProductController.editProduct)
// router.post('/edit', ProductController.editProductPost)
// router.get('/:id', ProductController.getProduct)
// router.post('/delete/:id', ProductController.deleteProduct)

module.exports = router