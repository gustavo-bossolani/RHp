import { Router } from 'express';

import DepartamentoController from './app/controllers/DepartamentoController';

const routes = new Router();

routes.get('/departamentos', DepartamentoController.index);
routes.post('/departamentos', DepartamentoController.store);

export default routes;
