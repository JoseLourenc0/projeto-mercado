const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

//Create Product
router.post('/createProduct', productController.createProduct)

//Get Products
router.get('/products', productController.index)

//Get Product
router.get('/:id', productController.show)

//Update Product
router.put('/updateProduct/:id', productController.update)

//Delete Product
router.delete('/:id', productController.delete)

module.exports = router