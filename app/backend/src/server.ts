import 'dotenv/config';
import app from './app';
import connectToDatabase from './connection';

const APP_PORT = Number(process.env.APP_PORT) || 3001;

connectToDatabase()
  .then(() => {
    app.listen(APP_PORT, () => console.log(`Running server on port: ${APP_PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });