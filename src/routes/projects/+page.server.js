import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(303, '/login');
	}
	const records = await locals.pb.collection('projects').getFullList();
	const projectEntries = records.map((record) => ({
		name: record.name,
		id: record.id,
		address: 'projects/' + record.id
	}));

	return { projectEntries };
};

export const actions = {
	delete: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('projects').delete(body.project);
		} catch (e) {
			console.log(e);
		}
	},

	create: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('projects').create({ ...body, author: locals.user.id });
		} catch (e) {
			console.log(e);
		}
	}
};
