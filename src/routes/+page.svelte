<script>
	export let data;
</script>

<hgroup>
	<h2>Welcome To The Page Builder</h2>
	<p>This is a proof of concept for how to create a minimal page builder</p>
</hgroup>

<br />

{#if data.user}
	<article>
		<a href="/projects">View Projects</a>
	</article>
{/if}

<br />

{#if data.pages}
	<article>
		{#each data.pages as page}
			<ul>
				<li><a href={'pages/' + page.name}>{page.name}</a></li>
			</ul>
		{/each}
	</article>
{/if}
