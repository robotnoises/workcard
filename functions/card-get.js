const faunadb = require('faunadb');
const q = faunadb.query

const id = '287001482713104896'; // todo: temp

exports.handler = async function (event, context) {
  const response = await faunaDb.query(q.Get(q.Ref(`workcard/cards/${id}`)));

  console.log({ response });

  return {
    statusCode: 200,
    body: JSON.stringify({ data: response }),
  };
};
