<script lang="ts">
	import Container from '$lib/bulma/components/Container.svelte';
	import Row from '$lib/bulma/components/Row.svelte';
</script>

<Container>
	<Row>
		<slot />
	</Row>
</Container>
