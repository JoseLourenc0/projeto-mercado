module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('reg_products',[
      {
        action: 'purchase',
        product_id: 1,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action: 'purchase',
        product_id: 2,
        quantity: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action: 'purchase',
        product_id: 3,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action: 'purchase',
        product_id: 4,
        quantity: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action: 'purchase',
        product_id: 5,
        quantity: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action: 'purchase',
        product_id: 6,
        quantity: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action: 'sale',
        product_id: 6,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
  }
};
