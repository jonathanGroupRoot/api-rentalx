import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationUseCase {
    constructor(
        private createSpecificationRepository: SpecificationsRepository,
    ) {}

    execute({ name, description }: IRequest): void {
        const alreadyExists =
            this.createSpecificationRepository.findByName(name);

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
