import Sequelize, { Model } from 'sequelize';

class Funcionario extends Model {
    static init(sequelize) {
        super.init(
            {
                cpf_func: Sequelize.INTEGER,
                nm_func: Sequelize.STRING,
                sl_func: Sequelize.DOUBLE,
                dt_nasc_func: Sequelize.DATE,
                fk_depto: Sequelize.INTEGER,
            },
            {
                tableName: 'tb_funcionario',
                modelName: 'Funcionario',
                freezeTableName: true,
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Departamento, {
            foreignKey: 'cd_depto',
            as: 'departamento',
        });
    }
}

export default Funcionario;
