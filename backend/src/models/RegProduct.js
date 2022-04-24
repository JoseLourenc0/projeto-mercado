const Sequelize = require('sequelize')

class RegProduct extends Sequelize.Model {

    static init(sequelize) {
        super.init({

            action: {
                type: Sequelize.STRING(10),
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'RegProduct must not be empty'
                    }
                }
            },
            quantity: Sequelize.INTEGER

        }, {
            sequelize
        })

        return this
    }

    static associate (models) {
        this.belongsTo(models.Category, { foreignKey: 'product_id'})
    }

}

module.exports = RegProduct