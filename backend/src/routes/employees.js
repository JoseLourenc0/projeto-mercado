const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee')

//Create Employee
router.post('/createEmployee', employeeController.createEmployee)

//Get Employees
router.get('/employees', employeeController.index)

//Get Employee
router.get('/:id', employeeController.show)

//Update Employee
router.put('/updateEmployee/:id', employeeController.update)

//Delete Employee
router.delete('/:id', employeeController.delete)

module.exports = router