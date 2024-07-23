import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true
  },
  price: {
    type: Number,
    required: [true, "Please add a price"]
  },
  features: {
    type: [String],
    required: [true, "Please add features"],
  }
}, {
  timestamps: true
});

export const Membership = mongoose.model('Membership', membershipSchema);
