import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { AuthenticateUserCase } from './AuthenticateUserUseCase';

let authenticateUserRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserCase;

describe('Authenticate User', async () => {
    beforeEach(() => {
        authenticateUserRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserCase(
            authenticateUserRepositoryInMemory,
        );
    });

    it('Create')
});
