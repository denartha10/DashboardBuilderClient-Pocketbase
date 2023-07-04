<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	const closeDelete = () => {
		dispatch('deleteclose');
	};

	export let openDelete;
	export let currentlySelected;
</script>

<dialog open={openDelete}>
	<article>
		<header>
			<h2>Confirm Your Request</h2>
		</header>
		{#if currentlySelected}
			<p>
				Are you sure you want to delete <strong>{currentlySelected.name}</strong>
			</p>
			<footer>
				{#if currentlySelected}
					<form action="?/delete" method="POST" use:enhance on:submit={closeDelete}>
						<input type="hidden" name="project" value={currentlySelected.id} />
						<button on:click|preventDefault={closeDelete} class="secondary"> Cancel </button>
						<button type="submit"> Confirm </button>
					</form>
				{/if}
			</footer>
		{/if}
	</article>
</dialog>
