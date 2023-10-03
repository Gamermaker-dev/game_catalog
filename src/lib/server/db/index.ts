import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { Game } from './types/Game';

const db = new Database(DB_PATH, { verbose: console.log });

export const getGames = (limit = 50): Game[] => {
	const sql = `
    select id, game, owned, completed, has_dlc, franchise_id, sequel
    from games
    limit $limit
    `;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all({ limit });
	return rows as Game[];
};
