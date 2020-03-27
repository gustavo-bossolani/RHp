require('dotenv').config()
module.exports = {
    dialect: 'postgres',
    host: process.env.HOST || 'localhost',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'docker',
    database: process.env.DB_DATABASE || 'RHp',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
