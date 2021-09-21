import { CompraRepository } from '../../repositories/implementations/CompraRepository';
import { ListCompraUseCase } from './ListCompraUseCase';
import { ListControllerCompra } from './ListControllerCompra';

const compraRepository = CompraRepository.getInstance();
const listCompraUseCase = new ListCompraUseCase(compraRepository);
const listCompraController = new ListControllerCompra(listCompraUseCase);

export { listCompraController };
