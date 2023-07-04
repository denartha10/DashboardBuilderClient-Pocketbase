<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	export let formFields;
	export let isOpen = false;

	let currentlySelected = undefined;
</script>

<dialog open={isOpen}>
	<article>
		<header>
			<h2>Add New Component</h2>
		</header>

		<form action="?/addNewComponent" method="POST" use:enhance>
			<select bind:value={currentlySelected} name="type">
				{#each Object.keys(formFields) as field}
					<option value={field}>{field}</option>
				{/each}
			</select>

			{#if currentlySelected !== undefined}
				{#each Object.entries(formFields[currentlySelected].props) as [name, type]}
					<input {type} {name} placeholder={name} />
				{/each}
			{/if}

			<div>
				<button on:click|preventDefault={close}>Cancel</button>
				<button type="submit" on:click={close}>Add Component</button>
			</div>
		</form>
	</article>
</dialog>
