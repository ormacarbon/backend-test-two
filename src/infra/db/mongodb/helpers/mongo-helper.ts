import { Collection, MongoClient } from "mongodb"

export const MongoHelper = {
  client: null as MongoClient,

  async connect(): Promise<void> {
    this.client = await MongoClient.connect("mongodb://localhost/beers")
  },

  async disconnect(): Promise<void> {
    await this.client.close();
  },

  async getCollection(name: string): Promise<Collection> {
    return await this.client.db().collection(name);
  }
}
