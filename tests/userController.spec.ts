import { describe, expect, it, mock, test } from 'bun:test';
import { Elysia } from 'elysia';
import { userRouter } from '../src/user/userRouter';

const app = new Elysia().use(userRouter);

describe('userController => "/"', () => {
	it('should return statusCode 200', async () => {
		// Arrange
		const expected = 200;
		// Act
		const result = await requestStatusCode('http://localhost/users/');
		// Assert
		expect(result).toEqual(expected);
	});

	it('should return an objet', async () => {
		const expected: { mensaje: string } = {
			mensaje: 'mensaje desde /',
		};

		const result = await requestData<{ mensaje: string }>(
			'http://localhost/users/'
		);

		// console.log('mostrando el body: ', result);
		expect(result).toEqual(expected);
	});
});

const requestStatusCode = async (url: string): Promise<number> =>
	(await app.handle(new Request(url))).status;

async function requestData<T>(url: string): Promise<T> {
	const result = await app.handle(new Request(url));
	return await result.json();
}
