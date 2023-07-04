<script>
	import { componentStore as options } from '$lib/stores/componentStores.js';
	

	export let components;
</script>

{#each components as component}
	<br />
	<svelte:component this={$options[component.type].component} {...component.props} />
	<br />
{/each}
