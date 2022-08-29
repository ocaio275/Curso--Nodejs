const express = require('express')
const router = express.Router()

const ProductController = require('../Controllers/ProductController')

router.get('/', ProductController.showProducts)
router.post('/create', ProductController.showProductsPost)
router.get('/create', ProductController.createProduct)

module.exports = router