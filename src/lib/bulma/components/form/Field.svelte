<script lang="ts">
	import type { FieldType } from '$lib/bulma/types/FieldType';
	import clsx from 'clsx';
	import Input from './Input.svelte';

	export let field: FieldType;

	$: isGrouped = field.input.length > 0;
</script>

<div
	class={clsx(
		'field',
		isGrouped && 'is-grouped',
		typeof field.groupAlignment !== 'undefined' && `is-grouped-${field.groupAlignment}`,
        field.hasAddons && 'has-addons',
	)}
>
	{#each field.input as input}
		<label class="label">{field.label}</label>
		<Input
			value={input.value}
			color={input.color}
			size={input.size}
			isRounded={input.isRounded}
			isFocused={input.isFocused}
			isHovered={input.isHovered}
			isLoading={input.isLoading}
			isStatic={input.isStatic}
			disabled={input.disabled}
			readonly={input.readonly}
			leftIcon={input.leftIcon}
			rightIcon={input.rightIcon}
		/>
	{/each}
</div>
