import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose Connection established successfully `);
  } catch (error) {
    console.log(`MongoDb error: ${error}`);
  }
};

export default connectDatabase;
