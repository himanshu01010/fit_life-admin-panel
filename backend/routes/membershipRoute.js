import express from 'express';
import { addMembershipPlan, getMembershipPlans } from '../controllers/membershipController.js';

const router = express.Router();

router.post('/add', addMembershipPlan);
router.get('/all', getMembershipPlans);

export default router;
