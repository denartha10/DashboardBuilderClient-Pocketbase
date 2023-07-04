import { readable } from 'svelte/store';
import Table from '$lib/builderComponents/Table.svelte';
import Greeting from '$lib/builderComponents/Table.svelte';

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
	greeting: {
		component: Greeting,
		props: {
			config: {
				title: 'text',
				description: 'text'
			}
		}
	}
});
