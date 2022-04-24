const express = require('express')
const router = express.Router()
const regProductsController = require('../controllers/regProduct')

//Create regProduct
router.post('/createRegProduct', regProductsController.createRegProduct)

//Get Products
router.get('/RegProducts', regProductsController.index)

//Get regProduct
router.get('/:id', regProductsController.show)

//Update regProduct
router.put('/updateRegProduct/:id', regProductsController.update)

//Delete regProduct
router.delete('/:id', regProductsController.delete)

module.exports = router