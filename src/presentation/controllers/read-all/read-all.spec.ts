import { BeerModels } from "../../../domain/models/beer"
import { ReadAllController } from "./read-all"
import { ReadAll, ServerError } from "./read-all-protocols"

const fakeReturn = [{
  id: "Object_id",
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
}]

const makeReadAll = (): ReadAll => {
  class ReadAllStrub implements ReadAll {
    read(): Promise<BeerModels[]> {
      return new Promise(resolve => resolve(fakeReturn))
    }
  }

  return new ReadAllStrub();
}

interface SutTypes {
  sut: ReadAllController
  readAllStub: ReadAll
}

const makeSut = (): SutTypes => {
  const readAllStub = makeReadAll();
  const sut = new ReadAllController(readAllStub);

  return {
    sut,
    readAllStub
  }
}

describe("ReadAll Controller", () => {
  it("Should return 500 if ReadAll throws", async () => {
    const { sut, readAllStub } = makeSut();
    const httpResquest = {
      body: {}
    }

    jest.spyOn(readAllStub, "read").mockImplementationOnce(() => {
      throw new Error();
    })
    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  })

  it('Should call read of ReadAll', async () => {
    const { sut, readAllStub } = makeSut();
    const httpRequest = {
      body: {}
    }
    
    const createSpy = jest.spyOn(readAllStub, "read");
    sut.handle(httpRequest);

    expect(createSpy).toHaveBeenCalled();
  })

  it('Should return 200 if valid values is provided.', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {}
    }
    
    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toEqual(fakeReturn);
  })
})