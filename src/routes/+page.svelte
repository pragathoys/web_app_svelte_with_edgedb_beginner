<script>
import { each } from "svelte/internal";

	/**
* @type {string | any[]}
*/
	let movies = [
		{'title':'Demo movie 1' , 'release_year':2022},
		{'title':'Demo movie 2' , 'release_year':2021}
	];

</script>

<h1>Welcome to SvelteKit and EdgeDB</h1>
<p>To read the documentation please visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> and <a href="https://www.edgedb.com/docs">www.edgedb.com/docs</a>. </p>

<h2>Scope of the project</h2>
<p>The project simply demonstrates the use of the EdgeDB for storing data and the SvelteKit for displaying those data. Enjoy!</p>


<h2>Available Movies</h2>
<p>Below you will find a list of movies that are available in our EdgeDB:</p>

<ul>
	{#if movies.length==0}
	<li><span class="error">No movies found :(</span></li>
	{:else}
		{#each movies as movie}
			<li><span class="title">{movie.title}</span><span class="release_year">({movie.release_year})</span></li>
		{/each}
	{/if}
</ul>

<style>
	li{
		background-color: #fff;
		border:1px solid #efefef;
		margin-bottom:5px;
		padding:10px;
	}

	.title{
		font-size: 22px;
		font-weight: bold;
	}

	.release_year{
		padding-left:10px;
		color:cornflowerblue;
	}

	.error{
		color:crimson;
	}
</style>
