import { Router } from 'express';

import { specificationController } from '../modules/cars/useCases/createSpecifications';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
    specificationController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
    listSpecificationController.handle(request, response);
});

export { specificationRoutes };
