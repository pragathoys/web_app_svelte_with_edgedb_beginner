import {Buffer}  from 'buffer';

import * as edgedb from "edgedb";
import { each } from "svelte/internal";

import { error } from '@sveltejs/kit';


 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	const client = edgedb.createClient();

	const movies = await client.query(`select Movie{title,release_year};`);

	// const movies = [
	// 	{'title':'Demo movie 3' , 'release_year':2022},
	// 	{'title':'Demo movie 4' , 'release_year':2021}
	// ];

	return { movies: movies };

 
  throw error(404, 'Not found');
}