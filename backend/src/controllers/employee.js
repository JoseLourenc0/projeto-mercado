const Employee = require('../models/Employee')

exports.createEmployee = async (req,res,next) => {
    
    try {

        const newEmployee = await Employee.create({
            ...req.body
        })
    
        return res.json(newEmployee)

    } catch(e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }

}

exports.index = async (req,res,next) => {
    try {

        const employees = await Employee.findAll({order: [['id','desc']]})
        return res.json(employees)

    } catch (e) {
        return res.json(null)
    }
}

exports.show = async (req,res,next) => {
    try {

        const { id } = req.params
        const employee = await Employee.findByPk(id)
        return res.json(employee)

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

        const employee = await Employee.findByPk(id)

        if(!employee) return res.status(400).json({
            errors: ["Employee doesn't exist!"]
        })

        const newData = await employee.update(req.body)

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

        const employee = await Employee.findByPk(id)

        if(!employee) return res.status(400).json({
            errors: ["Employee doesn't exist!"]
        })

        await employee.destroy()

        return res.json(employee)

    } catch (e) {

        return res.status(400).json({
            errors: e.errors.map(erro => erro.message)
        })

    }
}