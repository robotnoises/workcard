const contentful = require('contentful');

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_API_TOKEN;

const id = '5C1xUsOd7UGgSdwAO4knVg'; // todo: temp

exports.handler = async function (event, context) {
  const client = contentful.createClient({
    space,
    accessToken,
  })

  let response;

  try {
    response = await client.getEntry(id);
  } catch (ex) {
    console.error({ ex });
  }
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({ data: response }),
  };
};
