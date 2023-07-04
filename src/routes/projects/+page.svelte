<script>
	import Icon from '@iconify/svelte';
	import ProjectEntry from '$lib/components/ProjectEntry.svelte';
	import DeleteDialog from '$lib/components/DeleteProjectModal.svelte';
	import CreateDialog from '$lib/components/CreateProjectModal.svelte';
	import UpdateDialog from '$lib/components/UpdateProjectModal.svelte';

	let openDelete = false;
	let openCreate = false;
	let openEdit = false;
	let currentlySelected = undefined;

	export let data;
</script>

<div class="grid grid-cols-3">
	{#each data.projectEntries as project}
		<ProjectEntry
			{project}
			on:edit={(e) => {
				openEdit = true;
				currentlySelected = e.detail.project;
			}}
			on:delete={(e) => {
				openDelete = true;
				currentlySelected = e.detail.project;
			}}
		/>
	{/each}
	<div>
		<button
			data-tooltip="Add New Project"
			data-placement="right"
			class="secondary"
			on:click|preventDefault={() => {
				openCreate = true;
			}}
		>
			<Icon icon="mdi:plus" />
		</button>
	</div>
</div>

<DeleteDialog
	{openDelete}
	{currentlySelected}
	on:deleteclose={() => {
		currentlySelected = undefined;
		openDelete = false;
	}}
/>
<CreateDialog
	{openCreate}
	on:createclose={() => {
		openCreate = false;
	}}
/>
<UpdateDialog
	{openEdit}
	{currentlySelected}
	on:editclose={() => {
		currentlySelected = undefined;
		openEdit = false;
	}}
/>
