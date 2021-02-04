const faunadb = require('faunadb')
const { query: q } = faunadb;

const id = '289631659817435650'; // todo: temp

exports.handler = async function (event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  let result;

  try {
    result = await await client.query(q.Get(q.Ref(q.Collection('cards'), id)));
  } catch (ex) {
    console.error({ ex });
  }
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(result.data),
  };
};
