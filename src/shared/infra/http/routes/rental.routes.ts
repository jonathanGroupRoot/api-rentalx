import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRentals/CreateRentalController';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post('/', ensureAuthenticate, createRentalController.handle);

export { rentalRoutes };
