import mongoose from 'mongoose';

async function connection(): Promise<void> {
  try {
    mongoose.set('strictQuery', false);

    if (process.env.NODE_ENV === 'test') {
      await mongoose.connect(process.env.DATABASE_CONNECTION_TEST as string);
    } else {
      await mongoose.connect(process.env.DATABASE_CONNECTION as string);
    }
  } catch (error) {
    console.log(error);
  }
}

export default connection;
