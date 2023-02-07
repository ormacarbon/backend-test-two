import { MissingParamError } from "../../erros/missing-param-error";
import { AddBeerController } from './add-beer';

interface SutTypes {
  sut: AddBeerController
}

const makeSut = (): SutTypes => {
  const sut = new AddBeerController();

  return {
    sut
  }
}

describe("AddBeer Controller", () => {
  it("Should return 400 if no name is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  })

  it("Should return 400 if no abv is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('abv'));
  })

  it("Should return 400 if no address is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('address'));
  })

  it("Should return 400 if no category is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('category'));
  })

  it("Should return 400 if no city is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('city'));
  })

  it("Should return 400 if no coordinates is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('coordinates'));
  })

  it("Should return 400 if no country is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('country'));
  })
  
  it("Should return 400 if no description is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('description'));
  })

  it("Should return 400 if no ibu is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('ibu'));
  })

  it("Should return 400 if no state is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('state'));
  })

  it("Should return 400 if no website is provided", () => {
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

    const httpResponse = sut.handle(httpResquest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('website'));
  })
})