import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { compraRoutes } from './compra.routes';
import { specificationRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specification', specificationRoutes);
router.use('/compra', compraRoutes);

export { router };
