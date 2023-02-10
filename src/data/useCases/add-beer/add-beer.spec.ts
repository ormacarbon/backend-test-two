import { BeerModels } from "../../../domain/models/beer";
import { AddBeerData } from "../../../domain/useCases/add-beer";
import { AddBeerRepository } from '../../protocols/add-beer-repository';
import { DbAddBeer } from "./add-beer";

const fakeBeerData = {
  name: "Stone House Stout",
  abv: 8.918797384901016,
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

const makeAddBeerRepository = (): AddBeerRepository => {
  class AddBeerRepositoryStub implements AddBeerRepository {
    add(beerData: AddBeerData): Promise<BeerModels> {
      const fakeBeer = {
        id: "Object_id",
        ...fakeBeerData
      }

      return new Promise(resolve => resolve(fakeBeer));
    }
  }

  return new AddBeerRepositoryStub();
}

interface SutTypes {
  sut: DbAddBeer
  addBeerRepositoryStub: AddBeerRepository
}

const makeSut = (): SutTypes => {
  const addBeerRepositoryStub = makeAddBeerRepository();
  const sut = new DbAddBeer(addBeerRepositoryStub);

  return {
    sut,
    addBeerRepositoryStub
  }
}

describe("DbAddBeer", () => {
  it("Should throw if AddBeerRepository throws", async () => {
    const { sut, addBeerRepositoryStub } = makeSut();

    jest.spyOn(addBeerRepositoryStub, "add").mockImplementationOnce(() => {
      throw new Error();
    })
    const promise = sut.add(fakeBeerData);

    expect(promise).rejects.toThrow();
  })

  it("Should return the correct values on success", async () => {
    const { sut } = makeSut();

    const response = await sut.add(fakeBeerData);

    expect(response).toEqual({
      id: "Object_id",
      ...fakeBeerData
    });
  })
})