import { Router } from 'express';

import DepartamentoController from './app/controllers/DepartamentoController';

const routes = new Router();

routes.get('/departamentos', DepartamentoController.index);

export default routes;
