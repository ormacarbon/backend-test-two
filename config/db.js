import mongoose from "mongoose";
import dotenv from "dotenv/config.js"

mongoose.connect(process.env.MONGODB_URI)

let db = mongoose.connection

export default db;