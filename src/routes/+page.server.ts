import type { PageServerLoad } from './$types';
import { getGames } from '$lib/server/db';

export const load = (() => {
	const games = getGames();

	return {
		games
	};
}) satisfies PageServerLoad;
