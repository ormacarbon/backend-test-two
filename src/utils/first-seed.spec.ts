import { firstSeed as sut } from "./first-seed";
import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper';

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

describe("firstSeed", () => {
  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('beers');
    await accountCollection.deleteMany({});
    await MongoHelper.disconnect();
  });

  it("Should connect to mongodb", async () => {
    await sut();
    const beerCollection = await MongoHelper.getCollection("beers");

    expect(beerCollection).toBeTruthy();
  })

  it("Should seed to mongodb", async () => {
    await MongoHelper.connect();
    let beerCollection = await MongoHelper.getCollection("beers");
    const beforeSeed = await beerCollection.findOne({ name: fakeBeer.name });  
    expect(beforeSeed).toBeFalsy();

    await sut(); 
    beerCollection = await MongoHelper.getCollection("beers");
    const afterSeed = await beerCollection.findOne({ name: fakeBeer.name });
    expect(afterSeed).toBeTruthy();
  })
})