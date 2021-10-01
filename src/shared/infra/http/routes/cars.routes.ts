import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecifications/CreateSpecificationController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';

const carsRouter = Router();

const createCarController = new CreateCarController();
const listCarAvailableController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateSpecificationController();

carsRouter.post(
    '/',
    ensureAuthenticate,
    ensureAdmin,
    createCarController.handle,
);

carsRouter.get('/available', listCarAvailableController.handle);

carsRouter.post(
    '/specifications/:id',
    ensureAuthenticate,
    ensureAdmin,
    createCarSpecificationController.handle,
);

export { carsRouter };
