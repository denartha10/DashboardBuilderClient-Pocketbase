<script>
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	const addComponent = () => {
		dispatch('addopen');
	};
</script>

<article class="placeholder">
	<button class="rounded placeholder" on:click={addComponent}>
		<Icon icon="mdi:plus" />
	</button>
</article>
