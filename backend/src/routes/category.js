const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')

//Create Category
router.post('/createCategory', categoryController.createCategory)

//Get Categories
router.get('/categories', categoryController.index)

//Get Category
router.get('/:id', categoryController.show)

//Update Category
router.put('/updateCategory/:id', categoryController.update)

//Delete Category
router.delete('/:id', categoryController.delete)

module.exports = router