import { MongoHelper as sut } from "./mongo-helper"

describe("MongoHelper", () => {
  beforeAll(async () => {
    await sut.connect();
  })

  afterAll(async () => {
    await sut.disconnect();
  })

  it("Should reconnect if mongodb down", async () => {
    let beerCollection = await sut.getCollection("beers");
    expect(beerCollection).toBeTruthy();
    await sut.disconnect();
    beerCollection = await sut.getCollection("beers");
    expect(beerCollection).toBeTruthy();
  })
})