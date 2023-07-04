<script>
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	const editProject = (project) => {
		dispatch('edit', { project });
	};

	const deleteProject = (project) => {
		dispatch('delete', { project });
	};

	export let project;
</script>

<div>
	<article>
		<h3>{project.name}</h3>
		<a href={project.address}>View Project</a>
		<footer>
			<button
				on:click|preventDefault={deleteProject(project)}
				data-tooltip="Delete Project"
				data-placement="bottom"
				class="outline secondary rounded"
			>
				<Icon icon="material-symbols:delete-rounded" />
			</button>
			<button
				on:click|preventDefault={editProject(project)}
				data-tooltip="Edit Project Settings"
				data-placement="bottom"
				class="outline secondary rounded"
			>
				<Icon icon="material-symbols:settings" />
			</button>
		</footer>
	</article>
</div>
