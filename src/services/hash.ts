import type { IHash } from './interfaces/IHash.js';

export class Hash implements IHash {
	async hash(password: string) {
		return await Bun.password.hash(password);
	}

	async verify(password: string, hash: string) {
		return Bun.password.verify(password, hash);
	}
}
