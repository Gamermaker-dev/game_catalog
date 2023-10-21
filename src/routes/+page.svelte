<script lang="ts">
	import type { PageData } from './$types';
	import Page from '$lib/components/Page.svelte';
	import Title from '$lib/bulma/elements/Title.svelte';
	import Column from '$lib/bulma/layout/Column.svelte';
	import Table from '$lib/bulma/elements/Table.svelte';
	import type { TableData } from '$lib/bulma/types/TableData';
	import Button from '$lib/bulma/elements/Button.svelte';
	import type { Game } from '$lib/server/db/types/Game';
	import clsx from 'clsx';
	import Delete from '$lib/bulma/elements/Delete.svelte';

	export let data: PageData;

	const headers = ['ID', 'TITLE'];

	let randomElement: Game;
	let open: boolean = false;

	$: games = data.games
		.filter((g) => !g.completed)
		.map((g) => {
			return { value: [g.id, g.game], isSelected: false } as TableData;
		});
</script>

<div class={clsx('modal', open && 'is-active')}>
	<div class="model-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">NEXT GAME</p>
			<Delete on:click={() => open = false} />
		</header>
		<section class="modal-card-body">
			{#if randomElement}
				{randomElement.game}
			{/if}
		</section>
		<footer class="modal-card-foot">
			<Button on:click={() => (open = false)}>Close</Button>
		</footer>
	</div>
</div>

<Page>
	<Column size={11}>
		<Title>BACKLOG</Title>
		<Table {headers} data={games} types={['fullwidth', 'striped']} />
	</Column>
	<Column>
		<Button
			color="primary"
			on:click={() => {
				randomElement = data.games.filter((g) => !g.completed)[
					Math.floor(Math.random() * data.games.filter((g) => !g.completed).length)
				];
				open = true;
			}}>Select Game</Button
		>
	</Column>
</Page>
