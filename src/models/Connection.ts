import mongoose from "mongoose";

const MONGO_DB_URL = "mongodb://localhost:27017/MyEnterprise";

const connectToDatabase = (
  mongoDatabaseURL: string = MONGO_DB_URL
): Promise<typeof mongoose> => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(mongoDatabaseURL);
};

export default connectToDatabase;
