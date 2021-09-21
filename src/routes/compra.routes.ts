import { Router } from 'express';

import { createCompraControler } from '../modules/cars/useCases/createCompra';
import { listCompraController } from '../modules/cars/useCases/listCompra';

const compraRoutes = Router();

compraRoutes.post('/', (request, response) => {
    createCompraControler.handle(request, response);
});

compraRoutes.get('/', (request, response) => {
    listCompraController.handle(request, response);
});

export { compraRoutes };
