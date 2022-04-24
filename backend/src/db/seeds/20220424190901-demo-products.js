module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products',[
      {
        name: 'Salgadinho',
        category_id: 1,
        price: 6.4,
        coust: 2.5,
        expiration_date: '2022-07-20 00:00:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sucrilhos',
        category_id: 1,
        price: 20.99,
        coust: 8.15,
        expiration_date: '2022-08-20 00:00:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Vassoura',
        category_id: 2,
        price: 15,
        coust: 6.2,
        expiration_date: '2030-07-20 00:00:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Vanish',
        category_id: 2,
        price: 17.20,
        coust: 8.50,
        expiration_date: '2025-07-20 00:00:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pasta de Dente',
        category_id: 3,
        price: 6.4,
        coust: 2.5,
        expiration_date: '2023-05-02 00:00:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Contra-Filé',
        category_id: 4,
        price: 40,
        coust: 25,
        expiration_date: '2022-07-20 00:00:00',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
  }
};
