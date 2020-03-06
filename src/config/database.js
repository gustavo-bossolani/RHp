module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'RHp',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
    },
};
