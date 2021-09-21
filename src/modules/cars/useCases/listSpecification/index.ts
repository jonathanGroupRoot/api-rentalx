import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const listSpecificationRepository = SpecificationsRepository.getInstance();
const listSpecificatonUseCase = new ListSpecificationUseCase(
    listSpecificationRepository,
);
const listSpecificationController = new ListSpecificationController(
    listSpecificatonUseCase,
);

export { listSpecificationController };
