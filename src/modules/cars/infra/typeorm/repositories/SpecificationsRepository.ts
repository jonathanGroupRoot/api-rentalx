import { getRepository, Repository } from 'typeorm';

import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from '@modules/cars/repositories/ISpecificatiosRepository';

import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }
    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });
        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        const specification = await this.repository.find();
        return specification;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };