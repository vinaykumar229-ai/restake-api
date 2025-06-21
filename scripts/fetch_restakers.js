const { request, gql } = require('graphql-request');
const fs = require('fs');

const endpoint = process.env.GRAPHQL_ENDPOINT;
const query = gql`
  {
    delegations(first: 10) {
      delegator
      amount
      operator {
        id
      }
    }
  }
`;

async function fetchRestakers() {
  const data = await request(endpoint, query);
  fs.writeFileSync('data/restakers_live.json', JSON.stringify(data.delegations, null, 2));
  console.log('✅ Restakers saved');
}

fetchRestakers();