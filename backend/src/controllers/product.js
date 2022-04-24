const Product = require('../models/Product')
const Category = require('../models/Category')

exports.createProduct = async (req,res,next) => {
    
    try {

        const { category_id } = req.body

        if(!category_id) return res.status(400).json({
            errors: ['ID Category not sent!']
        })

        const category = await Category.findByPk(category_id)

        if(!category) return res.status(400).json({
            errors: ["ID Category doesn't exist"]
        })

        const newProduct = await Product.create({
            ...req.body
        })
    
        return res.json(newProduct)

    } catch(e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }

}

exports.index = async (req,res,next) => {
    try {

        const products = await Product.findAll({order: [['category_id','desc'],['id','desc']]})
        return res.json(products)

    } catch (e) {
        return res.json(null)
    }
}

exports.show = async (req,res,next) => {
    try {

        const { id } = req.params
        const product = await Product.findByPk(id)
        return res.json(product)

    } catch (e) {
        return res.json(null)
    }
}

exports.update = async (req,res,next) => {
    try {
        const { id } = req.params

        if(!id) return res.status(400).json({
            errors: ['ID not sent!']
        })

        const product = await Product.findByPk(id)

        if(!product) return res.status(400).json({
            errors: ["Product doesn't exist!"]
        })

        const newData = await product.update(req.body)

        return res.json(newData)

    } catch (e) {
        
        if(e.errors) {
            return res.status(400).json({
                errors: e.errors.map(erro => erro.message)
            })
        }

        return res.status(400).json({
            error: e
        })
    }
}

exports.delete = async (req,res,next) => {
    try {
        const { id } = req.params

        if(!id) return res.status(400).json({
            errors: ['ID not sent!']
        })

        const product = await Product.findByPk(id)

        if(!product) return res.status(400).json({
            errors: ["Product doesn't exist!"]
        })

        await product.destroy()

        return res.json(product)

    } catch (e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }
}