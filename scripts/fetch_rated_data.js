const axios = require('axios');
const fs = require('fs');
const BASE_URL = 'https://api.rated.network/v1/eigenlayer/rewards';

async function fetchValidators() {
  const res = await axios.get(`${BASE_URL}/operator`);
  fs.writeFileSync('data/validators_live.json', JSON.stringify(res.data.operators, null, 2));
  console.log('✅ Validators saved');
}

async function fetchRewards(address) {
  const res = await axios.get(`${BASE_URL}/delegator?delegator=${address}`);
  fs.writeFileSync(`data/rewards_${address}.json`, JSON.stringify(res.data, null, 2));
  console.log(`✅ Rewards for ${address} saved`);
}

fetchValidators();