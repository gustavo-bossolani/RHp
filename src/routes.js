import { Router } from 'express';

import DepartamentoController from './app/controllers/DepartamentoController';
import FuncionarioController from './app/controllers/FuncionarioController';
import HoleriteController from './app/controllers/HoleriteController';

const routes = new Router();

routes.get('/departamento', DepartamentoController.index);
routes.post('/departamento', DepartamentoController.store);

routes.get('/funcionario', FuncionarioController.index);
routes.post('/funcionario', FuncionarioController.store);

routes.get('/holerite/funcionario/:cpf', HoleriteController.index);

export default routes;
