import { MongoClient } from "mongodb";

let client: any = null;

async function connect() {
    if (!client)
        client = new MongoClient(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`);

    await client.connect();
    return client.db(process.env.DATABASE);
}

async function disconnect() {

    if (!client) {
        return true;
    }

    await client.close();
    client = null;
    return true;

}


export { connect, disconnect }