import { Compra } from '../../model/Compra';
import { ICompraRepository, ICompraRepositoryDTO } from '../ICompraRepository';

class CompraRepository implements ICompraRepository {
    private compra: Compra[];

    private static INSTANCE: CompraRepository;

    private constructor() {
        this.compra = [];
    }
    public static getInstance(): CompraRepository {
        if (!CompraRepository.INSTANCE) {
            CompraRepository.INSTANCE = new CompraRepository();
        }
        return CompraRepository.INSTANCE;
    }
    create({ name, item, value }: ICompraRepositoryDTO): void {
        const compras = new Compra();

        Object.assign(compras, {
            name,
            item,
            value,
        });
        this.compra.push(compras);
    }
    list(): Compra[] {
        return this.compra;
    }
    findByname(name: string): Compra {
        const compras = this.compra.find(compra => compra.name === name);
        return compras;
    }
}

export { CompraRepository };
