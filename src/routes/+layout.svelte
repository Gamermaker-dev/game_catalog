<script lang="ts">
	import Navbar from '$lib/bulma/components/navbar/Navbar.svelte';
	import type { NavbarItemType } from '$lib/bulma/types/NavbarItem';
	import '../app.scss';

	const navbar: NavbarItemType[] = [{ label: 'Home', url: '/', placement: 'start' }];
</script>

<Navbar {navbar} />

<section class="section">
	<slot />
</section>
