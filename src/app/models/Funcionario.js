import Sequelize, { Model } from 'sequelize';

class Funcionario extends Model {
    static init(sequelize) {
        super.init(
            {
                CPF_FUNC: Sequelize.INTEGER,
                NM_FUNC: Sequelize.STRING,
                SL_FUNC: Sequelize.DOUBLE,
                DT_NASC_FUNC: Sequelize.DATE,
                CD_DEPTO: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Departamento, {
            foreignKey: 'CD_DEPTO',
            as: 'departamento',
        });
    }
}

export default Funcionario;
