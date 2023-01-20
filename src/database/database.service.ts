import mongoose from "mongoose";
import { config } from "dotenv";

const connectToDatabase = () => {
  config();

  mongoose.set('strictQuery', false);
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

export {
  connectToDatabase
}