const { GraphQLClient } = require('graphql-request');
const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);
module.exports = client;