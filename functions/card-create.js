const faunadb = require('faunadb');
const q = faunadb.query

exports.handler = async function (event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
  });

  const fakeData = {
    firstName: 'Foo',
    lastName: 'Barson',
    title: 'Guy',
    employer: 'Company A',
    summary: 'Cool, chill as hell',
    skills: ['none'],
  };

  let response;

  try {
    response = await client.query(q.Create(q.Collection('cards'), { data: fakeData }));
  } catch (ex) {
    console.error({ ex });
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({ data: response.data }),
  };
};
