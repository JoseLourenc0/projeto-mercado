module.exports = {
    dialect: 'mysql',
    host: require('../../.env').MYSQL_HOST,
    port: require('../../.env').MYSQL_PORT,
    username: require('../../.env').MYSQL_USER,
    password: require('../../.env').MYSQL_PASSWORD,
    database: require('../../.env').MYSQL_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    dialectOptions: {
        timezone: 'local'
    },
    timezone: 'America/Sao_Paulo'
}