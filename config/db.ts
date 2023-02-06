import mongoose from "mongoose";
import config from 'config';
mongoose.set("strictQuery", true);

async function connect(){
    const MONGO_URL = config.get<string>('MONGO_URL')

    try {
        await mongoose.connect(MONGO_URL)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default connect