import { Compra } from '../model/Compra';

interface ICompraRepositoryDTO {
    name: string;
    item: string;
    value: number;
}

interface ICompraRepository {
    create({ name, item, value }: ICompraRepositoryDTO): void;
    list(): Compra[];
    findByname(name: string): Compra;
}

export { ICompraRepository, ICompraRepositoryDTO };
