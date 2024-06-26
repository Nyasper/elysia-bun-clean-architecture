import { LoginUser } from '../../application/login.js';

interface Login {
	body: {
		email: string;
		password: string;
	};
	token: string;
}

export class LoginController {
	constructor(private loginUser: LoginUser) {}

	async run({ body, token }: Login) {
		try {
			const user = this.loginUser.run(body.email, body.password);
			return {
				code: 200,
				user,
				message: 'user logged in',
			};
		} catch (e) {
			const error = e as Error;
			return {
				code: 400,
				message: error.message,
			};
		}
	}
}
