const Category = require('../models/Category')

exports.createCategory = async (req,res,next) => {
    
    try {

        const newCategory = await Category.create({
            ...req.body
        })
    
        return res.json(newCategory)

    } catch(e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }

}

exports.index = async (req,res,next) => {
    try {

        const categories = await Category.findAll({order: [['id','desc']]})
        return res.json(categories)

    } catch (e) {
        return res.json(null)
    }
}

exports.show = async (req,res,next) => {
    try {

        const { id } = req.params
        const category = await Category.findByPk(id)
        return res.json(category)

    } catch (e) {
        return res.json(null)
    }
}

exports.update = async (req,res,next) => {
    try {
        const { id } = req.params

        if(!id) return res.status(400).json({
            errors: ['ID not sent']
        })

        const category = await Category.findByPk(id)

        if(!category) return res.status(400).json({
            errors: ["Category doesn't exist!"]
        })

        const newData = await category.update(req.body)

        return res.json(newData)

    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })
    }
}

exports.delete = async (req,res,next) => {
    try {
        const { id } = req.params

        if(!id) return res.status(400).json({
            errors: ['ID not sent']
        })

        const category = await Category.findByPk(id)

        if(!category) return res.status(400).json({
            errors: ["Category doesn't exist!"]
        })

        await category.destroy()

        return res.json(category)

    } catch (e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }
}