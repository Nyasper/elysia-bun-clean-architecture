import type { IUser } from '../domain/IUser.js';
import type { IHash } from '../../services/interfaces/IHash.js';
import type { IJWT } from '../../services/interfaces/IJWT.js';

export class LoginUser {
	constructor(
		private userRepository: IUser,
		private hashService: IHash,
		private jwt: IJWT
	) {}

	async run(email: string, password: string) {
		const user = await this.userRepository.find(email);
		if (!user) throw new Error('User not found');
		const passIsValid = await this.hashService.verify(password, user.password);
		if (!passIsValid) throw new Error('Invalid Password');
		const token = this.jwt.sign(user.id);
		user.setToken(token);
		return {
			token,
			user,
		};
	}
}
