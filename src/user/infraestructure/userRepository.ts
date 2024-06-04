import type { IUser } from '../domain/IUser.js';
import { User } from '../domain/User.js';
import { db } from '../../db/migrate.js';
import { usersTable } from '../../db/schema.js';
import { randomUUID } from 'node:crypto';
import { eq } from 'drizzle-orm';

export class UserRepository implements IUser {
	async create(email: string, password: string): Promise<User> {
		try {
			const user = new User(randomUUID(), email, password);
			await db.insert(usersTable).values(user).execute();
			return user;
		} catch (error) {
			// Manejo de errores (podrías querer lanzar un error personalizado, registrar el error, etc.)
			throw new Error(`Error inserting user into database: \n${error}`);
		}
	}

	async find(email: string): Promise<User | null> {
		const user = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.email, email));

		if (user.length === 0) return null;

		return new User(user[0].id, email, user[0].password);
	}
}
