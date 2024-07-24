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
  try {
    const plans = await Membership.find();
    console.log('Fetched plans:', plans); // Add this line for debugging
    if (!plans || plans.length === 0) {
      return res.status(404).json({ message: 'No membership plans found' });
    }
    res.status(200).json(plans);
  } catch (error) {
    console.error('Error in getMembershipPlans:', error);
    res.status(500).json({ message: 'Server error while fetching membership plans' });
  }
});

// Update a membership plan
const updateMembership = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, price, features } = req.body;

  const membershipPlan = await Membership.findById(id);

  if (!membershipPlan) {
    res.status(404);
    throw new Error('Membership plan not found');
  }

  membershipPlan.name = name || membershipPlan.name;
  membershipPlan.price = price || membershipPlan.price;
  membershipPlan.features = features || membershipPlan.features;

  const updatedPlan = await membershipPlan.save();

  res.status(200).json(updatedPlan);
});


export { addMembershipPlan, getMembershipPlans , updateMembership};