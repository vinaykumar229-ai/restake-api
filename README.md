#  EigenLayer Restake API

A backend API service to fetch and expose EigenLayer restaking data including restakers, validator metadata, and reward insights.

>  **Live API URL**: [https://your-app-name.onrender.com](https://your-app-name.onrender.com)

---

##  Features

- Fetches live data from **subgraph** and **Rated API**
- Provides:
  - List of **restakers** (with amount and target operator)
  - List of **validators** with metadata
  - **Reward breakdown** per wallet
- Modular code structure with error handling
- Optional scripts to fetch and store data locally

---

##  API Endpoints

###  `GET /restakers`

Returns a list of users who restaked stETH.

```json
[
  {
    "userAddress": "0x1234567890abcdef...",
    "amountRestakedStETH": "100.5",
    "targetAVSOperatorAddress": "0xabcdef..."
  }
]
 GET /validators
Returns metadata of AVS validators/operators.


[
  {
    "operatorAddress": "0xabc...",
    "status": "active",
    "slashHistory": [],
    "totalDelegatedStake": "12500"
  }
]
 GET /rewards/:address
Returns reward breakdown for a specific wallet.

json
Copy
Edit
{
  "walletAddress": "0x123456...",
  "totalRewardsReceivedStETH": "75.2",
  "rewardsBreakdown": [
    {
      "operatorAddress": "0xabc...",
      "amountStETH": "60.0",
      "timestamps": [1678972800, 1679059200]
    }
  ]
}
⚙️ Tech Stack
Node.js + Express

GraphQL (via The Graph)

Axios (for Rated API)

SQLite (optional for persistent storage)

Render (for deployment)

🛠️ Setup (Local Development)

git clone https://github.com/vinaykumar229-ai/restake-api.git
cd restake-api
npm install
Create a .env file:


PORT=4000
GRAPHQL_ENDPOINT=https://api.studio.thegraph.com/query/YOUR-ID/eigenlayer/0.0.1
Run the server:


npm start
📁 Folder Structure
bash
Copy
Edit
restake-api/
├── data/                    # JSON cache (optional)
├── database/                # SQLite DB (if needed)
├── scripts/                 # Scripts to fetch data
├── src/
│   ├── controllers/         # Route logic
│   ├── routes/              # API routes
│   └── utils/               # API clients (Rated, GraphQL)
├── .env
├── package.json
└── README.md


 Deployment
Hosted on Render
 URL: https://your-app-name.onrender.com
 Change .env variables in Render → Dashboard → Environment.

 Status
 API working and deployed
 All requirements covered
 Can be extended with a frontend or CLI later

