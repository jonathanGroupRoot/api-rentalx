import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../../repositories/ISpecificatiosRepository';

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject('SpecificationRepository')
        private createSpecificationRepository: ISpecificationRepository,
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const alreadyExists =
            await this.createSpecificationRepository.findByName(name);

        if (alreadyExists) {
            throw new Error('Specification Already Exists');
        }

        this.createSpecificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
