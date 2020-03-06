module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Funcionario', 'CD_DEPTO', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'Departamento', key: 'CD_DEPTO' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('Funcionario', 'CD_DEPTO');
    },
};
