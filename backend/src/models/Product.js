const Sequelize = require('sequelize')

class Product extends Sequelize.Model {

    static init(sequelize) {
        super.init({

            name: {
                type: Sequelize.STRING(45),
                defaultValue: '',
                unique: {
                    msg: 'Product already exists!'
                },
                validate: {
                    notEmpty: {
                        msg: 'Product must not be empty'
                    }
                }
            },
            price: Sequelize.FLOAT,
            coust: Sequelize.FLOAT,
            expiration_date: Sequelize.DATE

        }, {
            sequelize
        })

        return this
    }

    static associate (models) {
        this.belongsTo(models.Category, { foreignKey: 'category_id'})
    }

}

module.exports = Product