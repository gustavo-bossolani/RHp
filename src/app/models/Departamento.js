import Sequelize, { Model } from 'sequelize';

class Departamento extends Model {
    static init(sequelize) {
        super.init(
            {
                CD_DEPTO: Sequelize.BIGINT,
                NM_DEPTO: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Departamento;
