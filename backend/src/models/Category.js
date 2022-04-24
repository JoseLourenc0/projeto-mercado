const Sequelize = require('sequelize')

class Category extends Sequelize.Model {

    static init(sequelize) {
        super.init({

            name: {
                type: Sequelize.STRING(45),
                defaultValue: '',
                unique: {
                    msg: 'Category already exists!'
                },
                validate: {
                    len: {
                        args: [3,45],
                        msg: 'Category must have between 3 and 45 characters'
                    }
                }
            }

        }, {
            sequelize
        })

        return this
    }

}

module.exports = Category