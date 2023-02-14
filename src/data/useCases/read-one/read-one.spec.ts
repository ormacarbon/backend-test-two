import { BeerModels } from "../../../domain/models/beer";
import { ReadOneRepository } from "../../protocols/read-one-repository";
import { DbReadOne } from "./read-one";

const name = "Stone House Stout";

const fakeBeer = {
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
}

const makeReadOneRepositoryStub = (): ReadOneRepository => {
  class ReadOneRepositoryStub implements ReadOneRepository {
    read(name: string): Promise<BeerModels> {
      return new Promise(resolve => resolve(fakeBeer));
    }
  }

  return new ReadOneRepositoryStub();
}

interface SutTypes {
  sut: DbReadOne
  readOneRepositoryStub: ReadOneRepository
}

const makeSut = (): SutTypes => {
  const readOneRepositoryStub = makeReadOneRepositoryStub();
  const sut = new DbReadOne(readOneRepositoryStub);

  return {
    sut,
    readOneRepositoryStub
  }
}

describe("DbReadOne", () => {
  it("Should call ReadOneRepository if correct value", async () => {
    const { sut, readOneRepositoryStub } = makeSut();

    const repositorySpy = jest.spyOn(readOneRepositoryStub, "read");
    await sut.read(name);

    expect(repositorySpy).toHaveBeenCalledWith(name);
  })

  it("Should throw if ReadOneRepository throws", async () => {
    const { sut, readOneRepositoryStub } = makeSut();

    jest.spyOn(readOneRepositoryStub, "read").mockImplementationOnce(() => {
      throw new Error();
    })
    const promise = sut.read(name);

    expect(promise).rejects.toThrow();
  })

  it("Shold return the correct value on success", async () => {
    const { sut } = makeSut();

    const response = await sut.read(name);

    expect(response).toEqual(fakeBeer);
  })
})