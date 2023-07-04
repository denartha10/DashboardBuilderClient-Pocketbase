<script>
	import ComponentList from '$lib/components/ComponentList.svelte';
	export let data;
	$: components = data.components ?? [];
</script>

<ComponentList {components} />
