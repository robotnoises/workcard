const faunadb = require('faunadb');
const { query: q } = faunadb;

exports.handler = async function (event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  const fakeData = {
    "firstName": "David",
    "lastName": "Nichols",
    "bio": "Experienced software engineer and manager. Passionate about building great teams. Lean software advocate. Servant leader.",
    "jobTitle": "Senior Software Engineering Manager",
    "recentEmployer": "Asurion",
    "location": "Nashville, TN",
    "phoneNumber": "",
    "email": "davenich@gmail.com",
    "skills": {},
    "links": {},
    "hobbies": {},
  };

  let result;

  try {
    result = await client.query(q.Create(q.Collection('cards'), { data: fakeData }));
  } catch (ex) {
    console.error({ ex });
  }

  console.log(result);
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
  };
};
