import fs from 'fs';
import path from 'path';
import { request, gql } from 'graphql-request';

const endpoint = process.env.GRAPHQL_ENDPOINT;
const localFile = path.join('data', 'restakers_live.json');

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

export const getRestakers = async (req, res) => {
  try {
    const data = await request(endpoint, query);
    const formatted = data.delegations.map(d => ({
      userAddress: d.delegator,
      amountRestakedStETH: d.amount,
      targetAVSOperatorAddress: d.operator.id
    }));
    res.json(formatted);
  } catch (err) {
    console.error('Subgraph error:', err.message);
    try {
      const fallback = JSON.parse(fs.readFileSync(localFile, 'utf8'));
      const formatted = fallback.map(d => ({
        userAddress: d.delegator,
        amountRestakedStETH: d.amount,
        targetAVSOperatorAddress: d.operator.id
      }));
      res.json(formatted);
    } catch (fileErr) {
      console.error('Local file error:', fileErr.message);
      res.status(500).json({ error: 'No restaker data available.' });
    }
  }
};
