<script lang="ts">
	import Hero from '$lib/bulma/components/Hero.svelte';
	import Section from '$lib/bulma/components/Section.svelte';
	import Title from '$lib/bulma/components/Title.svelte';
	import Navbar from '$lib/bulma/components/navbar/Navbar.svelte';
	import type { NavbarItemType } from '$lib/bulma/types/NavbarItem';
	import '../app.scss';

	const navbar: NavbarItemType[] = [{ label: 'Home', url: '/', placement: 'start' }];
</script>

<Navbar {navbar} />

<Hero color="black">
	<Title>Organize Video Game Backlog</Title>
</Hero>

<Section>
	<slot />
</Section>
