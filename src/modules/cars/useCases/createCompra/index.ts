import { CompraRepository } from '../../repositories/implementations/CompraRepository';
import { CreateCompraController } from './CreateCompraController';
import { CreateCompraUseCase } from './CreateCompraUseCase';

const createCompraRepository = CompraRepository.getInstance();
const createCompraUseCase = new CreateCompraUseCase(createCompraRepository);
const createCompraControler = new CreateCompraController(createCompraUseCase);

export { createCompraControler };
