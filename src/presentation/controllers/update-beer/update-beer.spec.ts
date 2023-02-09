import { AddBeerData } from "../../../domain/useCases/add-beer";
import { makeBodyValidator } from "../add-beer/add-beer.spec";
import { makeReadOne } from "../read-one/read-one.spec";
import { UpdateBeerController } from "./update-beer";
import { MissingParamError, NotFoundError, ReadOne, ServerError, UpdateBeer, ValidateBody } from "./update-beer-protocols";

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

const makeUpdateBeer = (): UpdateBeer => {
  class UpdateBeerStub implements UpdateBeer {
    update(name: string, beerData: AddBeerData): Promise<boolean> {
      return new Promise(resolve => resolve(true))
    }
  }

  return new UpdateBeerStub();
}

interface SutTypes {
  sut: UpdateBeerController
  updateBeerStub: UpdateBeer
  readOneStub: ReadOne
  validateBodyStub: ValidateBody
}

const makeSut = (): SutTypes => {
  const updateBeerStub = makeUpdateBeer();
  const readOneStub = makeReadOne();
  const validateBodyStub = makeBodyValidator();
  const sut = new UpdateBeerController(updateBeerStub, readOneStub, validateBodyStub);

  return {
    sut,
    updateBeerStub,
    readOneStub,
    validateBodyStub
  }
}

describe("UpdateBeer Controller", () => {
  it("Should return 400 if no name is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      params: {
        
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  })

  it("Should return 400 if Beer not found", async () => {
    const { sut, readOneStub } = makeSut();
    const httpResquest = {
      params: {
        name: "Bohemia"
      }
    }
    let result: void;

    jest.spyOn(readOneStub, "read").mockReturnValueOnce(new Promise(resolve => resolve(result)))
    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual(new NotFoundError());
  })

  it("Should return 400 if ValidateBeerBody returns a string", async () => {
    const { sut, validateBodyStub } = makeSut();
    const httpRequest = {
      body: {
        name: "Stone House Stout"
      },
      params: {
        name: "Stone House Stout"
      }
    }

    jest.spyOn(validateBodyStub, "validate").mockReturnValueOnce("website");
    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("website"));
  })

  it("Should return 500 if AddBeer throws", async () => {
    const { sut, updateBeerStub } = makeSut();
    const httpResquest = {
      body: fakeBeerData,
      params: {
        name: "Stone House Stout"
      }
    }

    jest.spyOn(updateBeerStub, "update").mockImplementationOnce(() => {
      throw new Error();
    })
    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  })

  it("Should return 204 on success", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        name: "Stone House Stout"
      },
      body: fakeBeerData
    }

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(204);
  })
})