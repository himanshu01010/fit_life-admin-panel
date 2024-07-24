import express from 'express';
import { addMembershipPlan, getMembershipPlans, updateMembership } from '../controllers/membershipController.js';

const router = express.Router();

router.post('/add', addMembershipPlan);
router.get('/all', getMembershipPlans);
router.put('/update/:id', updateMembership);

export default router;
