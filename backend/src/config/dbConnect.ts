import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.kvvzmb9.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log(`Database Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;