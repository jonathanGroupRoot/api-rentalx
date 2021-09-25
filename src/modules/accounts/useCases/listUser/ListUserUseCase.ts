import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class ListUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute(): Promise<User[]> {
        const all = this.userRepository.list();
        return all;
    }
}

export { ListUserUseCase };
