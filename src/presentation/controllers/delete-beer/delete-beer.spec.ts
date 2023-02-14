import { makeReadOne } from "../read-one/read-one.spec";
import { DeleteBeerController } from "./delete-beer";
import { DeleteBeer, MissingParamError, NotFoundError, ReadOne, ServerError } from "./delete-beer-protocols";

const fakeBeerData = {
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

const makeDeleteBeer = (): DeleteBeer => {
  class DeleteBeerStub implements DeleteBeer {
    delete(name: string): Promise<boolean> {
      return new Promise(resolve => resolve(true))
    }
  }

  return new DeleteBeerStub();
}

interface SutTypes {
  sut: DeleteBeerController
  deleteBeerStub: DeleteBeer
  readOneStub: ReadOne
}

const makeSut = (): SutTypes => {
  const deleteBeerStub = makeDeleteBeer();
  const readOneStub = makeReadOne();
  const sut = new DeleteBeerController(deleteBeerStub, readOneStub);

  return {
    sut,
    deleteBeerStub,
    readOneStub
  }
}

describe("DeleteBeer Controller", () => {
  it("Should return 400 if no name is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      query: {}
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  })

  it("Should return 400 if Beer not found", async () => {
    const { sut, readOneStub } = makeSut();
    const httpResquest = {
      query: {
        name: "Bohemia"
      }
    }
    let result: void;

    jest.spyOn(readOneStub, "read").mockReturnValueOnce(new Promise(resolve => resolve(result)))
    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual(new NotFoundError());
  })

  it("Should return 500 if AddBeer throws", async () => {
    const { sut, deleteBeerStub } = makeSut();
    const httpResquest = {
      body: fakeBeerData,
      query: {
        name: "Stone House Stout"
      }
    }

    jest.spyOn(deleteBeerStub, "delete").mockImplementationOnce(() => {
      throw new Error();
    })
    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  })

  it("Should return 204 on success", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      query: {
        name: "Stone House Stout"
      },
      body: fakeBeerData
    }

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(204);
  })
})