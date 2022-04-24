const Sequelize = require('sequelize')

class Employee extends Sequelize.Model {

    static init(sequelize) {
        super.init({

            name: {
                type: Sequelize.STRING(60),
                defaultValue: '',
                unique: {
                    msg: 'Employee already exists!'
                },
                validate: {
                    len: {
                        args: [3,60],
                        msg: 'Employee must have between 3 and 60 characters'
                    }
                }
            },
            salary: {
                type: Sequelize.FLOAT,
                validate: {
                    notEmpty: {
                        msg: 'Employee Salary must not be empty'
                    }
                }
            }

        }, {
            sequelize
        })

        return this
    }

}

module.exports = Employee