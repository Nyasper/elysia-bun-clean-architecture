import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

const sqlite = new Database('app.db');
export const db = drizzle(sqlite);

// migrate(db, {
// 	migrationsFolder: './drizzle',
// 	migrationsSchema: './src/db/schema.ts',
// });
