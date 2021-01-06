const faunadb = require('faunadb');
const q = faunadb.query

const id = '287001482713104896'; // todo: temp

exports.handler = async function (event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
  })

  const response = await client.query(q.Get(q.Ref(`workcard/cards/${id}`)));

  return {
    statusCode: 200,
    body: JSON.stringify({ data: response }),
  };
};
