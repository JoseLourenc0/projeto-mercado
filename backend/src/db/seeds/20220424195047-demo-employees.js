module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('employees',[
      {
        name: 'Sósia do Vin Diesel',
        salary: 2000.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maria Joaquina',
        salary: 3500.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Luva de Goleiro',
        salary: 4000.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Windows Nunes',
        salary: 1200.00,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {  }
};
