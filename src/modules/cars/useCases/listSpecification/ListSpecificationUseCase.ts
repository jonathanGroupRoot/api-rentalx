import { Specification } from '../../model/Specification';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

class ListSpecificationUseCase {
    constructor(
        private listSpecificationRepository: SpecificationsRepository,
    ) {}

    execute(): Specification[] {
        const specification = this.listSpecificationRepository.list();
        return specification;
    }
}
export { ListSpecificationUseCase };
