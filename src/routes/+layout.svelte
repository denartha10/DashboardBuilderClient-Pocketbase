<script>
	import '@picocss/pico';
	import '../app.css';
	import { page } from '$app/stores';

	$: segments = $page.url.pathname.split('/').filter(Boolean);
	export let data;
</script>

<header class="container">
	<nav>
		<ul>
			<li><strong>{data.user ? data.user.username : 'Not Logged In'}</strong></li>
		</ul>
		{#if data.user}
			<ul>
				<li>
					<form action="/logout" method="POST">
						<input type="submit" value="Logout" />
					</form>
				</li>
			</ul>
		{:else}
			<ul>
				<li>
					<form action="/login" method="GET">
						<input type="submit" value="Login" />
					</form>
				</li>
				<li>
					<form action="/register" method="GET">
						<input type="submit" value="Register" />
					</form>
				</li>
			</ul>
		{/if}
	</nav>
	<nav aria-label="breadcrumb">
		<ul>
			<li><a href="/">Home</a></li>
			{#each segments as segment, i (segment)}
				<li>
					<a href={`/${segments.slice(0, i + 1).join('/')}`} class="capitalise">{segment}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="container">
	<slot />
</main>

<footer />
