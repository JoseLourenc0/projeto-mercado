const Sequelize  = require('sequelize')
const databaseConfig  = require('../config/database')
const Category  = require('../models/Category')
const Product = require('../models/Product')
const RegProduct = require('../models/RegProduct')
const Employee = require('../models/Employee')

const models = [Category, Product, RegProduct, Employee]

const conn = new Sequelize(databaseConfig)

models.forEach( model => {
    model.init(conn)
    model.associate && model.associate(conn.models)
})