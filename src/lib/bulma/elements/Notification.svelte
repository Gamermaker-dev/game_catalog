<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../types/Colors';
	import Delete from './Delete.svelte';

	export let color: Colors | undefined = undefined;
	export let isLight: boolean = false;
</script>

<div
	class={clsx('notification', typeof color !== 'undefined' && `is-${color}`, isLight && 'is-light')}
>
	<Delete />
	<slot />
</div>
