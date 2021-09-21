import { CompraRepository } from '../../repositories/implementations/CompraRepository';

interface IRequest {
    name: string;
    item: string;
    value: number;
}
class CreateCompraUseCase {
    constructor(private createCompraRepository: CompraRepository) {}

    execute({ name, item, value }: IRequest): void {
        const compraAlreadyExits = this.createCompraRepository.findByname(name);

        if (compraAlreadyExits) {
            throw new Error('Compra Already Exits');
        }
        this.createCompraRepository.create({
            name,
            item,
            value,
        });
    }
}

export { CreateCompraUseCase };
