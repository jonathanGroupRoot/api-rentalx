import { inject, injectable } from 'tsyringe';

import { ICompraRepository } from '../../repositories/ICompraRepository';

interface IRequest {
    name: string;
    item: string;
    value: string;
}

@injectable()
class CreateCompraUseCase {
    constructor(
        @inject('CompraRepository')
        private compraRepository: ICompraRepository,
    ) {}

    async execute({ name, item, value }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.compraRepository.findByName(
            name,
        );

        if (categoryAlreadyExists) {
            throw new Error('Compra Already Exists');
        }

        this.compraRepository.create({
            name,
            item,
            value,
        });
    }
}

export { CreateCompraUseCase };
