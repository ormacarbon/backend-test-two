import { MongoHelper } from "../../helpers/mongo-helper";
import { AddBeerMongoRepository } from "../add-beer/add-beer-repository";
import { ReadOneMongoRepository } from "../read-one/read-one-repository";
import { UpdateBeerMongoRepository } from "./update-beer-repository";

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

const name = "Stone House Stout";

const addRepository = new AddBeerMongoRepository();
const readOneRepository = new ReadOneMongoRepository();

const makeSut = (): UpdateBeerMongoRepository => {
  return new UpdateBeerMongoRepository();
}

describe("UpdateBeerMongoRepository", () => {
  beforeAll(async () => {
    await MongoHelper.connect();
    await addRepository.add(fakeBeer);
  })

  afterAll(async () => {
    const accountCollection = await MongoHelper.getCollection('beers');
    await accountCollection.deleteMany({});
    await MongoHelper.disconnect();
  })

  it("Should update beer data", async () => {
    const sut = makeSut();
    const beerData = {
      name: "Stone House Stout",
      abv:18,
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

    await sut.update(name, beerData);
    const beer = await readOneRepository.read(name);

    expect(beer.abv).toBe(18);
  })
})