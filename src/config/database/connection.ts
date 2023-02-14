import mongoose from 'mongoose';
import catchErrorsFunctions from '../../common/utils/err/catchErrorsFunction';


/**
 * @returns {void}
 * @description Function to connect with mongodb database
 */
async function connection(): Promise<void> {
  try {
    mongoose.set('strictQuery', false);

    if (process.env.NODE_ENV === 'test') {
      await mongoose.connect(process.env.DATABASE_CONNECTION_TEST as string);
    } else {
      await mongoose.connect(process.env.DATABASE_CONNECTION as string);
    }
  } catch (error) {
    catchErrorsFunctions(error)
  }
}

export default connection;
