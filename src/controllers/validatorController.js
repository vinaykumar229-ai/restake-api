import axios from 'axios';

export const getValidators = async (req, res) => {
  try {
    const response = await axios.get('https://api.rated.network/v1/eigenlayer/rewards/operator');
    res.json(response.data.operators);
  } catch (err) {
    console.error('Rated API error:', err.message);
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
};
