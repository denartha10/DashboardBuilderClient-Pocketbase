<script>
	import Icon from '@iconify/svelte';
	import Table from '$lib/builderComponents/Table.svelte';
	import Greeting from '$lib/builderComponents/Greeting.svelte';
	import FormModal from '../../../lib/components/FormModal.svelte';

	const componentOptions = {
		table: {
			component: Table,
			props: {
				databaseURL: 'url',
				collection: 'text'
			}
		},
		greeting: {
			component: Greeting,
			props: {
				title: 'text',
				description: 'text'
			}
		}
	};

	export let data;
	let isOpen = false;
</script>

<h4>{data.name}</h4>

<hr />

{#each data.components as component}
	<br />
		<svelte:component this={componentOptions[component.type].component} {...component.props} />
	<br />
{/each}

<article class="placeholder">
	<button
		class="rounded placeholder"
		on:click={() => {
			isOpen = true;
		}}
	>
		<Icon icon="mdi:plus" />
	</button>
</article>

<FormModal
	on:close={() => {
		isOpen = false;
	}}
	{isOpen}
	formFields={componentOptions}
/>
