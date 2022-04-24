const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('./src/db')

//IMPORT DAS ROTAS
const categoryRoutes = require('./src/routes/category')
const productRoutes = require('./src/routes/product')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

//UTILIZAÇÃO DAS ROTAS
app.use('/category', categoryRoutes)
app.use('/product', productRoutes)

//Tratando rota não encontrada
app.use((req, res, next) => {
    const erro = new Error('Not found!')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            message: error.message
        }
    })
})
//Fim do tratamento de rota não encontrada

module.exports = app