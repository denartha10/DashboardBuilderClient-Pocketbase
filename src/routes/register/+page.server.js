import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').create({ ...body });
		} catch (e) {
			console.log(e);
			throw error(500, 'Something terrible happened!!');
		}

		throw redirect(303, '/login');
	}
};
