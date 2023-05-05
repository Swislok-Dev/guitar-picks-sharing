import mongoose from 'mongoose';

const guitarSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    style: { type: String, required: true },
    imageUrl: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Guitar =
  mongoose.models.Guitar || mongoose.model('Guitar', guitarSchema);

export default Guitar;
