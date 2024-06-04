import { CreateUser } from '../../application/create.js';

interface Register {
	body: {
		email: string;
		password: string;
	};
}

export class CreateUserController {
	constructor(private createUser: CreateUser) {}

	async run({ body }: Register) {
		try {
			const user = await this.createUser.run(body.email, body.password);
			return {
				status: 201,
				data: user,
			};
		} catch (e) {
			const error = e as Error;
			return {
				satus: 500,
				message: error.message,
			};
		}
	}
}
