<script>
	import { enhance } from '$app/forms';
</script>

<article>
	<!-- svelte-ignore missing-declaration -->
	<form action="?/login" method="POST" use:enhance autocomplete="off" role="group">
		<input type="email" name="email" placeholder="yupyup7up@madlad.com" />
		<input type="password" name="password" placeholder="Password" />
		<input type="submit" value="Login" />
	</form>
</article>
