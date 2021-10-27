import { Handler } from '@netlify/functions'
import axios from 'axios'

const sponsorUrl = 'https://opencollective.com/windicss/members.json'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'content-type': 'application/json; charset=utf-8',
};

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 503,
      body: JSON.stringify({error: 'Method Not Allowed'})
    }
  }

  try {
    const response = await axios.get(sponsorUrl);

    const cache = []
    const data = response.data.filter((i: any) => i.totalAmountDonated !== 0)
    .filter((i: any) => {
      if (cache.includes(i.profile)) {
        return false
      } else {
        cache.push(i.profile)
        return true
      }
    })
    .sort((a: any, b: any) => (
      b.totalAmountDonated - a.totalAmountDonated
    ))
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(error)
    }
  }
}

export { handler }
