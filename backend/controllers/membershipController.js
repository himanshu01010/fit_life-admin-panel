import asyncHandler from 'express-async-handler';
import { Membership } from '../models/membershipModel.js';

// Add a new membership plan
const addMembershipPlan = asyncHandler(async (req, res) => {
  const { name, price, features } = req.body;

  if (!name || !price || !features) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const newPlan = await Membership.create({
    name,
    price,
    features
  });

  res.status(201).json(newPlan);
});

// Get all membership plans
const getMembershipPlans = asyncHandler(async (req, res) => {
  const plans = await Membership.find();
  res.status(200).json(plans);
});

export { addMembershipPlan, getMembershipPlans };
