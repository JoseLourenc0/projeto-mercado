const Sequelize  = require('sequelize')
const databaseConfig  = require('../config/database')
const Category  = require('../models/Category')

const models = [Category]

const conn = new Sequelize(databaseConfig)

models.forEach( model => {
    model.init(conn)
    model.associate && model.associate(conn.models)
})