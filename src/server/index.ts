//  Dependencies
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from 'dotenv' 
dotenv.config()
//  Routes
import pages from "./routes/pages"

//  Configurations
//  PORT
const PORT = process.env.PORT
const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION
//  Express
const app = express()
app.use(express.json())
//  Mongoose
mongoose.connect(`${MONGODB_CONNECTION}`)
.then(() => console.log("Connected with Successful"))
.catch(error => console.log("There was an error to try connect with server " + error))
//  Cors
app.use(cors())
//  Routes
app.use("/", pages)

app.listen(PORT, () => console.log("Server running on port " + PORT))