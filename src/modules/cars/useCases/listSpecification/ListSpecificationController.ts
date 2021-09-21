import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
    constructor(private specificationUseCase: ListSpecificationUseCase) {}
    handle(request: Request, response: Response): Response {
        const specification = this.specificationUseCase.execute();

        return response.json(specification);
    }
}

export { ListSpecificationController };
