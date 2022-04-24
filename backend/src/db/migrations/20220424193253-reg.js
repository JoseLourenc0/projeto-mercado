module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reg_products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'SET NULL', //se deletar id da fk, será setado null
        onUpdate: 'CASCADE' //se for alterado a pk do registro pai, o filho será atualizado
      },
      action: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('reg_products');
  }
};
