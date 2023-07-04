<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	const closeCreate = () => {
		dispatch('createclose');
	};

	export let openCreate;
</script>

<dialog open={openCreate}>
	<article>
		<header>
			<h2>Create A New Project</h2>
		</header>
		<form action="?/create" method="POST" use:enhance role="group" on:submit={closeCreate}>
			<input type="text" name="name" placeholder="Project Name" />
			<button type="submit">Create</button>
			<button class="secondary" on:click|preventDefault={closeCreate}> Cancel </button>
		</form>
	</article>
</dialog>
