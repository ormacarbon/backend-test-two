import Beer from '../Domain/Beer';
import IBeerRepository from '../Interfaces/IBeerRepository';
import IBeer from '../Interfaces/IBeer';
import IBeerService from '../Interfaces/IBeerService';
import BadRequestError from '../Utils/ErrorsTypes/BadRequestError';
import NotFoundError from '../Utils/ErrorsTypes/NotFoundError';

class BeerService implements IBeerService<IBeer> {
  private _repository: IBeerRepository<IBeer>;

  constructor(repository: IBeerRepository<IBeer>) {
    this._repository = repository;
  }

  private createBeerDomain = (beer: IBeer): Beer => {
    const {
      abv,
      ibu,
      name,
    } = beer;
    if (abv && ibu && name) {
      const beerDomain = new Beer(abv, ibu, name, beer.id);
      beerDomain.setAddress(beer.address || undefined);
      beerDomain.setCategory(beer.category || undefined);
      beerDomain.setCity(beer.city || undefined);
      beerDomain.setCoordinates(beer.coordinates || undefined);
      beerDomain.setCountry(beer.country || undefined);
      beerDomain.setState(beer.state || undefined);
      beerDomain.setWebsite(beer.website || undefined);
      return beerDomain;
    }

    throw new BadRequestError('Missing properties to create domain.');
  };

  public async create(beer: IBeer) {
    const createdBeer = await this._repository.create(beer);
    const beerDomain = this.createBeerDomain(createdBeer);
    return {
      id: beerDomain.id,
      abv: beerDomain.abv,
      address: beerDomain.address,
      category: beerDomain.category,
      city: beerDomain.city,
      coordinates: beerDomain.coordinates?.length ? beerDomain.coordinates : undefined,
      country: beerDomain.country,
      ibu: beerDomain.ibu,
      name: beerDomain.name,
      description: beerDomain.description,
      state: beerDomain.state,
      website: beerDomain.website,
    };
  }

  public async readAll(): Promise<IBeer[]> {
    return this._repository.readAll();
  }

  public async update(id: string, beer: Partial<IBeer>): Promise<IBeer | null> {
    const updateBeer = await this._repository.update(id, beer) as IBeer;
    return this.createBeerDomain(updateBeer);
  }

  public async delete(id: string): Promise<{ deleted: boolean; }> {
    const { deletedCount } = await this._repository.delete(id);
    if (deletedCount > 0) return { deleted: true };
    throw new NotFoundError('The server cannot counter the requested resource.');
  }
}

export default BeerService;
