<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	// Variables
	export let formFields;
	export let isOpen = false;
	let currentlySelectedType = undefined;
	let currentlySelectedConfig = undefined;

	// Event Dispatcher
	const dispatch = createEventDispatcher();

	// Reactive statement for current config props
	$: currentConfigProps =
		currentlySelectedType !== undefined &&
		formFields[currentlySelectedType].props &&
		formFields[currentlySelectedType].props[currentlySelectedConfig]
			? Object.entries(formFields[currentlySelectedType].props[currentlySelectedConfig])
			: [];

	// Functions
	function close() {
		dispatch('close');
		currentlySelectedType = undefined;
		currentlySelectedConfig = undefined;
	}
</script>

<dialog open={isOpen}>
	<article>
		<header>
			<h2>Add New Component</h2>
		</header>

		<form action="?/addNewComponent" method="POST" use:enhance>
			<div>
				<select bind:value={currentlySelectedType} name="type">
					{#each Object.keys(formFields) as field}
						<option value={field}>{field}</option>
					{/each}
				</select>
			</div>

			{#if currentlySelectedType !== undefined}
				<div>
					<select bind:value={currentlySelectedConfig} name="config" required>
						{#each Object.keys(formFields[currentlySelectedType].props) as configs}
							<option value={configs}>{configs}</option>
						{/each}
					</select>

					{#each currentConfigProps as [name, type]}
						<input {type} {name} placeholder={name} required />
					{/each}
				</div>
			{/if}

			<div>
				<button on:click|preventDefault={close}>Cancel</button>
				<button type="submit">Add Component</button>
			</div>
		</form>
	</article>
</dialog>
