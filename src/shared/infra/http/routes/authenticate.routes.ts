import { Router } from 'express';

import { AuthenticateUserController } from '../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRouter = Router();

const authenticateController = new AuthenticateUserController();

authenticateRouter.post('/sessions', authenticateController.authenticate);

export { authenticateRouter };
