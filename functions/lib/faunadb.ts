import * as faunadb from  'faunadb';

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

export const faunaDb = client;
export const q = faunadb.query;
