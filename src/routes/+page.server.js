import * as edgedb from "edgedb";

import { error } from '@sveltejs/kit';


 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	const client = edgedb.createClient();

	const movies = await client.query(`select Movie{title,release_year};`);

	return { movies: movies };

 
  throw error(404, 'Not found');
}