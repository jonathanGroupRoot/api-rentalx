import { Request, Response } from 'express';

import { ListCompraUseCase } from './ListCompraUseCase';

class ListControllerCompra {
    constructor(private listCompraUseCase: ListCompraUseCase) {}
    handle(request: Request, response: Response): Response {
        const compra = this.listCompraUseCase.execute();

        return response.json(compra);
    }
}

export { ListControllerCompra };
