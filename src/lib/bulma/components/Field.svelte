<script lang="ts">
	import clsx from 'clsx';

	export let isGrouped: boolean = false;
	export let hasAddons: boolean = false;
</script>

<div class={clsx('field', isGrouped && 'is-grouped', hasAddons && 'has-addons')}>
	<slot />
</div>
