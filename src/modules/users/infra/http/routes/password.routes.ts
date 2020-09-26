import { Router } from 'express';

import SessionController from '../controllers/SessionsController';

const passwordRouter = Router();
const sessionsController = new SessionController();

passwordRouter.post('/', sessionsController.create);

export default passwordRouter;
