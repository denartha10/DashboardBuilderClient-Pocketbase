import { redirect, error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	let projectFetch, projectComponentsFetch, projectComponents;

	if (!locals.user) {
		throw redirect(303, '/login');
	}

	try {
		projectFetch = await locals.pb.collection('projects').getOne(params.slug);
		projectComponentsFetch = await locals.pb.collection('components').getFullList({
			filter: `project = "${params.slug}"`,
			sort: 'created'
		});
		projectComponents = projectComponentsFetch.map((record) => ({ ...record }));
	} catch (e) {
		console.log(e.message);
		throw error(404, 'You sure thats a project?');
	}

	return { ...projectFetch, components: projectComponents };
};

export const actions = {
	addNewComponent: async ({ locals, request, params }) => {
		const body = Object.fromEntries(await request.formData());
		const { type, ...props } = body;

		try {
			await locals.pb.collection('components').create({ type, props, project: params.slug });
		} catch (e) {
			console.log(e);
		}
	}
};
