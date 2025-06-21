import express from 'express';
import { getRewardsByAddress } from '../controllers/rewardController.js';

const router = express.Router();
router.get('/:address', getRewardsByAddress);

export default router;
