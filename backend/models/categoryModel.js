import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },
  categories: [
    {
      category: {
        type: String,
        required: true,
      },
      types: [
        {
          type: {
            type: String,
            required: true,
          },
          variants: [
            {
              variant: {
                type: String,
                required: true,
              },
            },
          ],
        },
      ],
    },
  ],
});

export default mongoose.model("Category", categorySchema);
