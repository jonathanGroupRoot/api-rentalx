import { Compra } from '../entities/Compra';

interface ICompraDTO {
    name: string;
    item: string;
    value: string;
}

interface ICompraRepository {
    create({ name, item, value }: ICompraDTO): Promise<void>;
    findByName(name: string): Promise<Compra>;
    list(): Promise<Compra[]>;
}

export { ICompraRepository, ICompraDTO };
