import Beer from '../Domain/Beer';
import IBeerRepository from '../Interfaces/IBeerRepository';
import IBeer from '../Interfaces/IBeer';
import IBeerService from '../Interfaces/IBeerService';
import BadRequestError from '../Utils/ErrorsTypes/BadRequestError';

class BeerService implements IBeerService<IBeer> {
  private _repository: IBeerRepository<Beer, IBeer>;

  constructor(repository: IBeerRepository<Beer, IBeer>) {
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
    const beerDomain = this.createBeerDomain(beer);
    return this._repository.create(beerDomain);
  }

  public async readAll(): Promise<IBeer[]> {
    return this._repository.readAll();
  }

  public async update(id: string, beer: Partial<IBeer>): Promise<IBeer | null> {
    return this._repository.update(id, beer);
  }
}

export default BeerService;
