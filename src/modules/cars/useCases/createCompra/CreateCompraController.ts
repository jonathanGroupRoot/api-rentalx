import { Request, Response } from 'express';

import { CreateCompraUseCase } from './CreateCompraUseCase';

class CreateCompraController {
    constructor(private createCompraUseCase: CreateCompraUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, item, value } = request.body;

        const compra = this.createCompraUseCase.execute({
            name,
            item,
            value,
        });

        return response.status(201).json(compra);
    }
}

export { CreateCompraController };
