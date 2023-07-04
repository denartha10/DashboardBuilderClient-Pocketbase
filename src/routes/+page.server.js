import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    let pages;
    
	try {
		pages = await locals.pb
			.collection('projects')
			.getFullList({
				sort: '-created'
			})
			.then((records) => records.map((record) => ({ ...record })));
	} catch (e) {
		console.log(e.message);
		throw error(404, 'You sure thats a project?');
	}

	return { pages };
};
