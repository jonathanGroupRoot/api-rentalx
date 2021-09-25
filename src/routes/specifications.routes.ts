import { Router } from 'express';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const specificationRoutes = Router();

const specificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.use(ensureAuthenticate);
specificationRoutes.post('/', specificationController.handle);

specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
