export type Game = {
	id: number;
	game: string;
	owned: boolean;
	completed: boolean;
	has_dlc: boolean;
	franchise_id?: number;
	sequel: boolean;
};
