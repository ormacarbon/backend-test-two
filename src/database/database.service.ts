import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(process.env.MONGO_URI);
}

export {
  connectToDatabase
};