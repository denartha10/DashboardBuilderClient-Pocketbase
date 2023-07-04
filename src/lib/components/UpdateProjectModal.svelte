<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	const closeEdit = () => {
		dispatch('editclose');
	};

	export let openEdit;
	export let currentlySelected;
</script>

<dialog open={openEdit}>
	<article>
		<header>
			<h2>Update Project Settings</h2>
		</header>

		<form action="?/update" method="POST" use:enhance on:submit={closeEdit}>
			{#if currentlySelected}
				<label>
					Name
					<input
						type="text"
						name="name"
						placeholder={currentlySelected.name}
						value={currentlySelected.name}
					/>
				</label>
				<label>
					Public
					<input type="checkbox" name="public" checked={currentlySelected.public} />
				</label>
				<input type="hidden" value={currentlySelected.id} name="id" />
			{/if}
			<br />
			<button type="submit">Update</button>
			<button class="secondary" on:click|preventDefault={closeEdit}>Cancel</button>
		</form>
	</article>
</dialog>
