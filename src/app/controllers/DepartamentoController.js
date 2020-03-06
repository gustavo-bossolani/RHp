import * as Yup from 'yup';

import Departamento from '../models/Departamento';

class DepartamentoController {
    async index(req, resp) {
        const deptos = await Departamento.findAll({
            attributes: [
                ['CD_DEPTO', 'codigo'],
                ['NM_DEPTO', 'nome'],
            ],
        });
        return resp.json(deptos);
    }

    async store(req, resp) {
        const schema = Yup.object().shape({
            nome: Yup.string('Digite o nome do Departamento.').required(
                'Nome do Departamento é obrigatório.'
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return resp.status(400).json({ erro: 'Erro de validação' });
        }

        const { nome } = req.body;
    }
}
export default new DepartamentoController();
