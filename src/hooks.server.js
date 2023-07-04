import PocketBase from 'pocketbase';
import { serialiseNonPOJO } from './lib/utils';

// const getMethods = (obj) => {
// 	let properties = new Set();
// 	let currentObj = obj;
// 	do {
// 		Object.getOwnPropertyNames(currentObj).map((item) => properties.add(item));
// 	} while ((currentObj = Object.getPrototypeOf(currentObj)));
// 	return [...properties.keys()].filter((item) => typeof obj[item] === 'function');
// };

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('http://localhost:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serialiseNonPOJO(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
