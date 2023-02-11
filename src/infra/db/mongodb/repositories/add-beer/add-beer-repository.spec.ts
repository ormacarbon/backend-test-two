import { AddBeerRepository } from "../../../../../data/protocols/add-beer-repository";
import { MongoHelper } from "../../helpers/mongo-helper"
import { AddBeerMongoRepository } from "./add-beer-repository";

const fakeBeer = {
  name: "Stone House Stout",
  abv:8.918797384901016,
  address:"141 South Main Street",
  category:"British Ale",
  city:"Slippery Rock",
  coordinates:[41.0638,-80.0556],
  country:"United States",
  description:"This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
  ibu:104,
  state:"Pennsylvania",
  website:"http://www.northcountrybrewing.com"
}

const makeSut = (): AddBeerRepository => {
  return new AddBeerMongoRepository();
}

describe("AddBeerMongoRepository", () => {
  beforeAll(async () => {
    await MongoHelper.connect();
  })

  afterAll(async () => {
    await MongoHelper.disconnect();
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('beers')
    await accountCollection.deleteMany({})
  })

  it("Should return an beer on success", async () => {
    const sut = makeSut();

    const beer = await sut.add(fakeBeer);

    expect(beer).toBeTruthy();
  })

  it("Should return an beer with correct properties", async () => {
    const sut = makeSut();

    const beer = await sut.add(fakeBeer);

    expect(beer.name).toEqual(fakeBeer.name);
    expect(beer.abv).toEqual(fakeBeer.abv);
    expect(beer.description).toEqual(fakeBeer.description);
  })

  it("Should return an beer with id", async () => {
    const sut = makeSut();

    const beer = await sut.add(fakeBeer);

    expect(beer.id).toBeTruthy();
  })
})