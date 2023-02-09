import mongoose from 'mongoose';

async function connection(): Promise<void> {
  try {
    mongoose.set('strictQuery', false);

    const connection_string: string = process.env
      .DATABASE_CONNECTION_STRING as string;

    const connection_test_database: string = process.env
      .DATABASE_CONNECTION_TEST_STRING as string;

    if (process.env.NODE_ENV === 'test') {
      await mongoose.connect(connection_test_database);
    } else {
      await mongoose.connect(connection_string);
    }

    const db = mongoose.connection;

    db.on('error', (error) => console.log('error', error));
  } catch (error) {
    console.log(error);
  }
}

export default connection;
