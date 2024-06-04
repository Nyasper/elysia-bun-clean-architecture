import type { IUser } from '../domain/IUser.js';
import type { IHash } from '../../services/interfaces/IHash.js';

export class CreateUser {
	constructor(private userRepository: IUser, private hashService: IHash) {}

	async run(email: string, password: string) {
		const hashedPasswod = await this.hashService.hash(password);
		return await this.userRepository.create(email, hashedPasswod);
	}
}
