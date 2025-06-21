import express from 'express';
import dotenv from 'dotenv';
import restakersRoutes from './routes/restakers.js';
import validatorsRoutes from './routes/validators.js';
import rewardsRoutes from './routes/rewards.js';

dotenv.config();

const app = express();
app.use(express.json());

// Mount routes
app.use('/restakers', restakersRoutes);
app.use('/validators', validatorsRoutes);
app.use('/rewards', rewardsRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
