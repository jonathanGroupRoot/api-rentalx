import { Compra } from '../../model/Compra';
import { CompraRepository } from '../../repositories/implementations/CompraRepository';

class ListCompraUseCase {
    constructor(private listCompraRepository: CompraRepository) {}

    execute(): Compra[] {
        const compra = this.listCompraRepository.list();
        return compra;
    }
}

export { ListCompraUseCase };
