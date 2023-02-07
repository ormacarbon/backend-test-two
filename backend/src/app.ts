import "reflect-metadata";
import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnect";

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server running in port 3003");
});

export default app;