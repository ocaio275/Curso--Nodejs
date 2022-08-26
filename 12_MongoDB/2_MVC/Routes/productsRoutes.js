const express = require('express')
const router = express.Router()

const ProductController = require('../Controllers/ProductController')

router.get('/', ProductController.showProducts)

module.exports = router