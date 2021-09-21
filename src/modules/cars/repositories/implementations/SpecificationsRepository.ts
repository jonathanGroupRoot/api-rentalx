import { Specification } from '../../model/Specification';
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from '../ISpecificatiosRepository';

class SpecificationsRepository implements ISpecificationRepository {
    private specification: Specification[];

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specification = [];
    }
    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });
        this.specification.push(specifications);
    }

    list(): Specification[] {
        return this.specification;
    }

    findByName(name: string): Specification {
        const specification = this.specification.find(
            specification => specification.name === name,
        );
        return specification;
    }
}

export { SpecificationsRepository };
