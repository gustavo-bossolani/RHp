import { Router } from 'express';

import DepartamentoController from './app/controllers/DepartamentoController';
import FuncionarioController from './app/controllers/FuncionarioController';
import HoleriteController from './app/controllers/HoleriteController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import swaggerConfig from './config/swagger';

const routes = new Router();

routes.use('/rhp-doc', swaggerConfig.serve, swaggerConfig.setup);

// Routes
/**
 * @Swagger
 * /session:
 *  post:
 *    description: Cria uma nova sessão de usuário.
 *    responses:
 *
 */
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/departamento', DepartamentoController.index);
routes.post('/departamento', DepartamentoController.store);

routes.get('/funcionario', FuncionarioController.index);
routes.post('/funcionario', FuncionarioController.store);

routes.get('/holerite/funcionario/:cpf', HoleriteController.index);

export default routes;
