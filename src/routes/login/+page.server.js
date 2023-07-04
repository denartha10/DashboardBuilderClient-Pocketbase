import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
		} catch (e) {
			throw error(500, 'Sure you have an account?');
		}

		throw redirect(303, '/');
	}
};
