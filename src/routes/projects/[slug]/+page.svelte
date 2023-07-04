<script>
	import AddNewComponentModal from '$lib/components/AddNewComponentModal.svelte';
	import ComponentList from '$lib/components/ComponentList.svelte';
	import AddComponentButton from '$lib/components/AddComponentButton.svelte';
	import { componentStore as options } from '$lib/stores/componentStores.js';

	export let data;

	$: components = data.components ?? [];
	let addIsOpen = false;
</script>

<h4>{data.name}</h4>
<hr />

<ComponentList {components} />

<AddComponentButton
	on:addopen={() => {
		addIsOpen = true;
	}}
/>

<AddNewComponentModal
	on:close={() => {
		addIsOpen = false;
	}}
	isOpen={addIsOpen}
	formFields={$options}
/>
