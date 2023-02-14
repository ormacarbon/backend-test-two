import { App } from "./app";
import connectToDatabase from "./database/Connection";
import "dotenv/config";

const APP_PORT = Number(process.env.APP_PORT) || 8000;

connectToDatabase()
  .then(() => {
    new App().start(APP_PORT);
  })
  .catch((error) => {
    console.log("Connection with database generated an error:\r\n");
    console.error(error);
    console.log("\r\nServer initialization cancelled");
    process.exit(0);
  });
