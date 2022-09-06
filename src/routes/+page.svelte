<script>


</script>

<h1>Welcome to SvelteKit and EdgeDB</h1>
<p>To read the documentation please visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> and <a href="https://www.edgedb.com/docs">www.edgedb.com/docs</a>. </p>

<h2>Scope of the project</h2>
<p>The project simply demonstrates the use of the EdgeDB for storing data and the SvelteKit for displaying those data. Enjoy!</p>


<h2>Available Movies</h2>
<p>Below you will find a list of movies that are available in our EdgeDB:</p>

<ul>
	<li><span class="error">No movies found :(</span></li>
</ul>

<style>
	li{
		background-color: #fff;
		border:1px solid #efefef;
		margin-bottom:5px;
		padding:10px;
	}

	.error{
		color:crimson;
	}
</style>
