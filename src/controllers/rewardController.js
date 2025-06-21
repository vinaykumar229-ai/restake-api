import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const getRewardsByAddress = async (req, res) => {
  const { address } = req.params;

  const localFile = path.join('data', `rewards_${address}.json`);
  const url = `https://api.rated.network/v1/eigenlayer/rewards/delegator?delegator=${address}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    console.error('Reward fetch error:', err.message);

    // Fallback to local file
    try {
      const data = fs.readFileSync(localFile, 'utf8');
      const parsed = JSON.parse(data);
      res.json(parsed);
    } catch (fileErr) {
      console.error('Local file error:', fileErr.message);
      res.status(500).json({ error: 'Failed to fetch rewards from API or local' });
    }
  }
};
