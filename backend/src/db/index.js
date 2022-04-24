const Sequelize  = require('sequelize')
const databaseConfig  = require('../config/database')
const Category  = require('../models/Category')
const Product = require('../models/Product')
const RegProduct = require('../models/RegProduct')

const models = [Category, Product, RegProduct]

const conn = new Sequelize(databaseConfig)

models.forEach( model => {
    model.init(conn)
    model.associate && model.associate(conn.models)
})