import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ICompraRepository } from '../../modules/cars/repositories/ICompraRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { CompraRepository } from '../../modules/cars/repositories/implementations/CompraRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificatiosRepository';

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
    'SpecificationRepository',
    SpecificationsRepository,
);

container.registerSingleton<ICompraRepository>(
    'CompraRepository',
    CompraRepository,
);