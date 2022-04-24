module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('categories',[
      {
        name: 'Alimentos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Produtos de Limpeza',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Produtos de Higiene Pessoal',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Açougue',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {  }
};
