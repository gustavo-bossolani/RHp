module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Departamento', {
            CD_DEPTO: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
            NM_DEPTO: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            CREATED_AT: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            UPDATED_AT: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('Departamento');
    },
};
