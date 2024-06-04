import { t } from 'elysia';

export const createUserDTO = {
	body: t.Object({
		email: t.String({ minLength: 6, format: 'email' }),
		password: t.String({ minLength: 4 }),
	}),
};

export const loginUserDTO = {
	body: t.Object({
		email: t.String({ minLength: 6, format: 'email' }),
		password: t.String({ minLength: 4 }),
	}),
};
