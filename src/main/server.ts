import app from "./config/app";
import env from "./config/env";
import { firstSeed } from '../utils/first-seed';

app.listen(env.port, async () => {
  await firstSeed();
  console.log("Server is Running!")
})
