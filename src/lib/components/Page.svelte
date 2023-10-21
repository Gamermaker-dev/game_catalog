<script lang="ts">
	import Container from '$lib/bulma/layout/Container.svelte';
	import Row from '$lib/bulma/layout/Row.svelte';
</script>

<Container>
	<Row>
		<slot />
	</Row>
</Container>
