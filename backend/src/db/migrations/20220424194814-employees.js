module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employees', { 
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true
     },
     name: {
       type: Sequelize.STRING(60),
       allowNull: false,
       unique: true
     },
     salary: {
       type: Sequelize.FLOAT,
       allowNull: false
     },
     created_at: {
       type: Sequelize.DATE,
       allowNull: false
     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull: false
     }
     })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};
