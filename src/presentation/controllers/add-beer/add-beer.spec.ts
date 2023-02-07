import { BeerModels } from "../../../domain/models/beer";
import { AddBeer, AddBeerData, MissingParamError, ServerError } from "./add-beer-protocols"
import { AddBeerController } from "./add-beer";

const makeAddBeer = (): AddBeer => {
  class AddBeerStub implements AddBeer {
    add(data: AddBeerData): Promise<BeerModels> {
      const fakeBeer = {
        id: 1,
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
}

const makeSut = (): SutTypes => {
  const addBeerStub = makeAddBeer();
  const sut = new AddBeerController(addBeerStub);

  return {
    sut,
    addBeerStub
  }
}

describe("AddBeer Controller", () => {
  it("Should return 400 if no name is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
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

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  })

  it("Should return 400 if no abv is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
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

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('abv'));
  })

  it("Should return 400 if no address is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
        abv:8.918797384901016,
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

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('address'));
  })

  it("Should return 400 if no category is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
        abv:8.918797384901016,
        address:"141 South Main Street",
        city:"Slippery Rock",
        coordinates:[41.0638,-80.0556],
        country:"United States",
        description:"This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
        ibu:104,
        state:"Pennsylvania",
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('category'));
  })

  it("Should return 400 if no city is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
        abv:8.918797384901016,
        address:"141 South Main Street",
        category:"British Ale",
        coordinates:[41.0638,-80.0556],
        country:"United States",
        description:"This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
        ibu:104,
        state:"Pennsylvania",
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('city'));
  })

  it("Should return 400 if no coordinates is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
        abv:8.918797384901016,
        address:"141 South Main Street",
        category:"British Ale",
        city:"Slippery Rock",
        country:"United States",
        description:"This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
        ibu:104,
        state:"Pennsylvania",
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('coordinates'));
  })

  it("Should return 400 if no country is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
        abv:8.918797384901016,
        address:"141 South Main Street",
        category:"British Ale",
        city:"Slippery Rock",
        coordinates:[41.0638,-80.0556],
        description:"This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
        ibu:104,
        state:"Pennsylvania",
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('country'));
  })
  
  it("Should return 400 if no description is provided", async () => {
    const { sut } = makeSut();
    const httpResquest = {
      body: {
        name: "Stone House Stout",
        abv:8.918797384901016,
        address:"141 South Main Street",
        category:"British Ale",
        city:"Slippery Rock",
        coordinates:[41.0638,-80.0556],
        country:"United States",
        ibu:104,
        state:"Pennsylvania",
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('description'));
  })

  it("Should return 400 if no ibu is provided", async () => {
    const { sut } = makeSut();
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
        state:"Pennsylvania",
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('ibu'));
  })

  it("Should return 400 if no state is provided", async () => {
    const { sut } = makeSut();
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
        website:"http://www.northcountrybrewing.com"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('state'));
  })

  it("Should return 400 if no website is provided", async () => {
    const { sut } = makeSut();
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
        state:"Pennsylvania"
      }
    }

    const httpResponse = await sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('website'));
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
      id: 1,
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