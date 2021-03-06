module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tb_funcionario', {
            cpf_func: {
                type: Sequelize.STRING,
                autoIncrement: false,
                primaryKey: true,
                unique: true,
            },
            nm_func: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            sl_func: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            dt_nasc_func: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            dt_adm_func: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                defaultValue: new Date(),
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('tb_funcionario');
    },
};
