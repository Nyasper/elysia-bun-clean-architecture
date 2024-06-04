import type { IJWT } from './interfaces/IJWT.js';
import jwt from 'jsonwebtoken';

export class JWTservice implements IJWT {
	private secret = 'some_secret';

	sign(payload: any): string {
		return jwt.sign(payload, this.secret);
	}
	verify(token: string): string {
		return jwt.verify(token, this.secret) as string;
	}
}
