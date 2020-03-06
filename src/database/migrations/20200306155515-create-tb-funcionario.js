module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Funcionario', {
            CPF_FUNC: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                unique: true,
            },
            NM_FUNC: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            SL_FUNC: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            DT_NASC_FUNC: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            DT_ADM_FUNC: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date(),
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
        return queryInterface.dropTable('Funcionario');
    },
};
