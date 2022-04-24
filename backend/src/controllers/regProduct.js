const Product = require('../models/Product')
const RegProduct = require('../models/RegProduct')

exports.createRegProduct = async (req,res,next) => {
    
    try {

        const { product_id, action } = req.body

        if(!product_id) return res.status(400).json({
            errors: ['ID Product not sent!']
        })

        const regProduct = await Product.findByPk(product_id)

        if(!regProduct) return res.status(400).json({
            errors: ["RegProduct doesn't exist"]
        })

        if(action !== 'purchase' && action !== 'sale') return res.status(400).json({
            errors: ["Action must be 'purchase' or 'sale'"]
        })

        const newRegProduct = await RegProduct.create({
            ...req.body
        })
    
        return res.json(newRegProduct)

    } catch(e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }

}

exports.index = async (req,res,next) => {
    try {

        const regProducts = await RegProduct.findAll({order: [['product_id','desc'],['id','desc']]})
        return res.json(regProducts)

    } catch (e) {
        return res.json(null)
    }
}

exports.show = async (req,res,next) => {
    try {

        const { id } = req.params
        const regProduct = await RegProduct.findByPk(id)
        return res.json(regProduct)

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

        const regProduct = await RegProduct.findByPk(id)

        if(!regProduct) return res.status(400).json({
            errors: ["RegProduct doesn't exist!"]
        })

        const newData = await regProduct.update(req.body)

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

        const regProduct = await RegProduct.findByPk(id)

        if(!regProduct) return res.status(400).json({
            errors: ["RegProduct doesn't exist!"]
        })

        await regProduct.destroy()

        return res.json(regProduct)

    } catch (e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }
}