import { BeerModels } from "../../../domain/models/beer";
import { ReadAllRepository } from "../../protocols/read-all-repository";
import { DbReadAll } from "./read-all";

const fakeBeers: BeerModels[] = [{
  id: "Object_id",
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
}]

const makeReadAllRepository = (): ReadAllRepository => {
  class ReadAllRepositoryStub implements ReadAllRepository {
    read(): Promise<BeerModels[]> {
      return new Promise(resolve => resolve(fakeBeers));
    }
  }

  return new ReadAllRepositoryStub();
}

interface SutTypes {
  sut: DbReadAll
  ReadAllRepositoryStub: ReadAllRepository
}

const makeSut = (): SutTypes => {
  const ReadAllRepositoryStub = makeReadAllRepository();
  const sut = new DbReadAll(ReadAllRepositoryStub);

  return {
    sut,
    ReadAllRepositoryStub
  }
}

describe("ReadAll", () => {
  it("Should throw if ReadAllRepository throws", async () => {
    const { sut, ReadAllRepositoryStub } = makeSut();

    jest.spyOn(ReadAllRepositoryStub, "read").mockImplementationOnce(() => {
      throw new Error();
    })
    const promise = sut.read();

    expect(promise).rejects.toThrow();
  })

  it("Should return the correct values on success", async () => {
    const { sut } = makeSut();

    const response = await sut.read();

    expect(response).toEqual(fakeBeers);
  })
})