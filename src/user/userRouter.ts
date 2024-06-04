import { Elysia } from 'elysia';
import { createUserDTO, loginUserDTO } from './domain/userDTO.js';
import {
	createUserController,
	loginController,
} from '../server/dependencies.js';

export const userRouter = new Elysia({ prefix: '/users' })

	.post(
		'/register',
		createUserController.run.bind(createUserController),
		createUserDTO
	)
	.post('/login', loginController.run.bind(loginController), loginUserDTO)

	.put('/', () => 'update user')
	.delete('/', () => 'delete user');
