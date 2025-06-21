const axios = require('axios');
module.exports = axios.create({
  baseURL: 'https://api.rated.network/v1/eigenlayer/rewards'
});