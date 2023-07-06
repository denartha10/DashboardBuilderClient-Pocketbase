import { readable } from 'svelte/store';
import Table from '$lib/builderComponents/Table.svelte';
import Info from '$lib/builderComponents/Info.svelte';

export const componentStore = readable({
	table: {
		component: Table,
		props: {
			database: {
				databaseURL: 'url',
				collection: 'text'
			},
			apiEndpoint: {
				apiEndpoint: 'url'
			}
		}
	},
	info: {
		component: Info,
		props: {
			config: {
				title: 'text',
				description: 'text'
			}
		}
	}
});
