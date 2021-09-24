import { inject, injectable } from 'tsyringe';

import { Specification } from '../../entities/Specification';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject('SpecificationRepository')
        private listSpecificationRepository: SpecificationsRepository,
    ) {}

    async execute(): Promise<Specification[]> {
        const specification = await this.listSpecificationRepository.list();
        return specification;
    }
}
export { ListSpecificationUseCase };
