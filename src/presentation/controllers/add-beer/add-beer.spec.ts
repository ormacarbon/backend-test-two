import { BeerModels } from "../../../domain/models/beer";
import { AddBeer, AddBeerData, MissingParamError, ServerError, ValidateBody } from "./add-beer-protocols"
import { AddBeerController } from "./add-beer";

export const makeBodyValidator = (): ValidateBody => {
  class ValidateBeerBodyStub implements ValidateBody {
    validate(data: any): string | void {}
  }

  return new ValidateBeerBodyStub();
}

const makeAddBeer = (): AddBeer => {
  class AddBeerStub implements AddBeer {
    add(data: AddBeerData): Promise<BeerModels> {
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

      return new Promise(resolve => resolve(fakeBeer));
    }
  }

  return new AddBeerStub();
}

interface SutTypes {
  sut: AddBeerController
  addBeerStub: AddBeer
  validatorStub: ValidateBody
}

const makeSut = (): SutTypes => {
  const addBeerStub = makeAddBeer();
  const validatorStub = makeBodyValidator();
  const sut = new AddBeerController(addBeerStub, validatorStub);

  return {
    sut,
    addBeerStub, 
    validatorStub
  }
}

describe("AddBeer Controller", () => {
  it("Should call validate", async () => {
    const { sut, validatorStub } = makeSut();
    const httpRequest = {
      body: {
        name: "Stone House Stout"
      }
    }

    const validateSpy = jest.spyOn(validatorStub, "validate");
    await sut.handle(httpRequest);

    expect(validateSpy).toBeCalledWith(httpRequest.body);
  })

  it("Should return 400 if ValidateBeerBody returns a string", async () => {
    const { sut, validatorStub } = makeSut();
    const httpRequest = {
      body: {
        name: "Stone House Stout"
      }
    }

    jest.spyOn(validatorStub, "validate").mockReturnValueOnce("name");
    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"))
  })

  it("Should return 500 if AddBeer throws", async () => {
    const { sut, addBeerStub } = makeSut();
    const httpResquest = {
      body: {
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
    }

    jest.spyOn(addBeerStub, "add").mockImplementationOnce(() => {
      throw new Error();
    })
    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  })

  it('Should call CreateBudge with correct values.', async () => {
    const { sut, addBeerStub } = makeSut();
    const httpRequest = {
      body: {
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
    }
    
    const createSpy = jest.spyOn(addBeerStub, "add");
    sut.handle(httpRequest);

    expect(createSpy).toHaveBeenCalledWith({
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
    });
  })

  it('Should return 201 if valid values is provided.', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
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
    }
    
    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(201);
    expect(httpResponse.body).toEqual({
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
    });
  })
})