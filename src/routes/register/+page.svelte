<script>
	import { enhance } from '$app/forms';
</script>

<article>
	<!-- svelte-ignore missing-declaration -->
	<form action="?/register" method="POST" use:enhance autocomplete="off">
		<label>
			Username
			<input type="text" name="username" placeholder="username" />
		</label>
		<label>
			Email
			<input type="email" name="email" placeholder="yupyup7up@madlad.com" />
		</label>
		<label>
			Password
			<input type="password" name="password" placeholder="Choose A Password" />
		</label>
		<label>
			Confirm Password
			<input type="password" name="passwordConfirm" placeholder="Confirm Password" />
		</label>

		<input type="submit" value="Register" />
	</form>
</article>
