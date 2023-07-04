<script>
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';

	let openDelete = false;
	let openCreate = false;
	let currentlySelected = undefined;

	export let data;
</script>

<div class="grid grid-cols-3">
	{#each data.projectEntries as project}
		<div>
			<article>
				<h3>{project.name}</h3>
				<a href={project.address}>View Project</a>
				<footer>
					<button
						on:click|preventDefault={() => {
							currentlySelected = project;
							console.log(currentlySelected);
							openDelete = true;
						}}
						data-tooltip="Delete Project"
						data-placement="bottom"
						class="outline secondary"
					>
						<Icon icon="material-symbols:delete-rounded" />
					</button>
				</footer>
			</article>
		</div>
	{/each}
	<div>
		<button
			class="secondary"
			on:click|preventDefault={() => {
				openCreate = true;
			}}
		>
			<Icon icon="mdi:plus" />
		</button>
	</div>
</div>

<dialog open={openDelete}>
	<article>
		<header>
			<h2>Confirm Your Request</h2>
		</header>
		<p>
			Are you sure you want to delete <strong
				>{currentlySelected ? currentlySelected.name : ''}</strong
			>
		</p>
		<footer>
			<form action="?/delete" method="POST" use:enhance>
				<input type="hidden" name="project" value={currentlySelected ? currentlySelected.id : ''} />
				<button
					on:click|preventDefault={() => {
						currentlySelected = undefined;
						openDelete = false;
					}}
					class="secondary"
				>
					Cancel
				</button>
				<button
					type="submit"
					on:click={() => {
						openDelete = false;
					}}
				>
					Confirm
				</button>
			</form>
		</footer>
	</article>
</dialog>

<dialog open={openCreate}>
	<article>
		<header>
			<h2>Create A New Project</h2>
		</header>
		<form action="?/create" method="POST" use:enhance role="group">
			<input type="text" name="name" placeholder="Project Name" />
			<button
				on:click={() => {
					openCreate = false;
				}}
				type="submit">Create</button
			>
			<button
				class="secondary"
				on:click|preventDefault={() => {
					openCreate = false;
				}}
			>
				Cancel
			</button>
		</form>
	</article>
</dialog>
