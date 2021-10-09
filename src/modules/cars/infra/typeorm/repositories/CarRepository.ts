import { getRepository, Repository } from 'typeorm';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }
    async updateAvailable(id: string, available: boolean): Promise<void> {
        return null;
    }
    async create({
        name,
        description,
        daily_date,
        license_plate,
        fine_amount,
        brand,
        category_id,
        specifications,
        id,
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_date,
            license_plate,
            fine_amount,
            brand,
            category_id,
            specifications,
            id,
        });
        await this.repository.save(car);
        return car;
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const carsId = await this.repository.findOne({ license_plate });
        return carsId;
    }
    async findAvailable(
        name?: string,
        brand?: string,
        category_id?: string,
    ): Promise<Car[]> {
        const carsQuery = this.repository
            .createQueryBuilder('c')
            .where('available = :available', { available: true });
        if (name) {
            carsQuery.andWhere('name = :name', { name });
        }
        if (brand) {
            carsQuery.andWhere('brand = :brand', { brand });
        }
        if (category_id) {
            carsQuery.andWhere('category_id = :category_id', { category_id });
        }
        const cars = await carsQuery.getMany();
        return cars;
    }

    async findById(id: string): Promise<Car> {
        return this.repository.findOne(id);
    }
}
export { CarRepository };
