import { error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	let projectComponentsFetch, components;
	try {
		projectComponentsFetch = await locals.pb.collection('components').getFullList({
			filter: `project.name = "${params.page}"`,
			sort: 'created'
		});
		components = projectComponentsFetch.map((record) => ({ ...record }));
	} catch (e) {
		console.log(e.message);
		throw error(404, 'You sure thats a project?');
	}

	return { components };
};
