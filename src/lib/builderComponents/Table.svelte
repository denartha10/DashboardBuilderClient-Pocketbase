<script>
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';
	export let databaseURL;
	export let collection;
	let dataCall;

	async function getEntries(databaseURL, collection) {
		const pb = new PocketBase(databaseURL);
		const records = await pb.collection(collection).getFullList();
		const entries = records.map((record) => ({ ...record }));

		return entries;
	}

	onMount(() => {
		dataCall = getEntries(databaseURL, collection);
	});
</script>

{#await dataCall ?? []}
	<h1>Loading</h1>
{:then data}
	{#if data.length > 0}
		<figure>
			<table>
				<thead>
					<tr>
						{#each Object.keys(data[0]) as key}
							<th scope="col">{key}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each data as row}
						<tr>
							{#each Object.values(row) as value}
								<td>{value}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</figure>
	{:else}
		<h2>No Data</h2>
	{/if}
{/await}
