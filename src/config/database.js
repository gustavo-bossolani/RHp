module.exports = {
    dialect: 'postgres',
    host: process.env.HOST || 'localhost',
    username: process.env.USERNAME || 'postgres',
    password: process.env.PASSWORD || 'docker',
    database: process.env.DATABASE || 'RHp',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
