import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './createSpecificationController';
import { CreateSpecificationUseCase } from './createSpecificationUseCase';

const specificationRepository = SpecificationsRepository.getInstance();
const specificationUseCase = new CreateSpecificationUseCase(
    specificationRepository,
);
const specificationController = new CreateSpecificationController(
    specificationUseCase,
);

export { specificationController };
