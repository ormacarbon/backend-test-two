import { DbUpdateBeer } from './update-beer';
import { UpdateBeerRepository } from '../../protocols/update-beer-repository';
import { AddBeerData } from '../../../domain/useCases/add-beer';

const name = "Stone House Stout";

const fakeBeer = {
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

const makeUpdateBeerRepository = (): UpdateBeerRepository => {
  class UpdateBeerRepositoryStub implements UpdateBeerRepository {
    update(name: string, beerData: AddBeerData): Promise<boolean> {
      return new Promise(resolve => resolve(true));
    }
  }

  return new UpdateBeerRepositoryStub();
}

interface SutTypes {
  sut: DbUpdateBeer
  updateBeerRepositoryStub: UpdateBeerRepository
}

const makeSut = (): SutTypes => {
  const updateBeerRepositoryStub = makeUpdateBeerRepository();
  const sut = new DbUpdateBeer(updateBeerRepositoryStub);

  return {
    sut,
    updateBeerRepositoryStub
  }
}

describe("DbUpdateBeer", () => {
  it("Should call UpdateBeerRepository with correct values", async () => {
    const { sut, updateBeerRepositoryStub } = makeSut();
    
    const updateSpy = jest.spyOn(updateBeerRepositoryStub, "update");
    await sut.update(name, fakeBeer);

    expect(updateSpy).toHaveBeenCalledWith(name, fakeBeer);
  })

  it("Should throw if UpdateBeerRepository throws", async () => {
    const { sut, updateBeerRepositoryStub } = makeSut();

    jest.spyOn(updateBeerRepositoryStub, "update").mockImplementationOnce(() => {
      throw new Error();
    })
    const promise = sut.update(name, fakeBeer);

    expect(promise).rejects.toThrow();
  })
})