import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserCase } from './AuthenticateUserUseCase';

let authenticateUserRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
    beforeEach(() => {
        authenticateUserRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserCase(
            authenticateUserRepositoryInMemory,
        );
        createUserUseCase = new CreateUserUseCase(
            authenticateUserRepositoryInMemory,
        );
    });

    it('should be able to authenticate an user', async () => {
        const user: ICreateUserDTO = {
            name: 'jonathan_root',
            email: 'jonathan@gmail.com',
            password: '1234',
            driver_license: 'ab',
        };
        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });
        expect(result).toHaveProperty('token');
    });

    it('should not be able to authenticate an nonexistent user', () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: 'falseEmail@gmail.com',
                password: '1212121',
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate with incorrect password', () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: 'jonathan_root_',
                email: 'jonathanvin@gmial.com',
                password: '11212',
                driver_license: '2121',
            };

            await authenticateUserRepositoryInMemory.create(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: '32932032093',
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
