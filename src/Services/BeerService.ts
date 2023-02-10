import Beer from '../Domain/Beer';
import IBeerRepository from '../Interfaces/IBeerRepository';
import IBeer from '../Interfaces/IBeer';
import IBeerService from '../Interfaces/IBeerService';

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
      beerDomain.setAddress(beer.address || '');
      beerDomain.setCategory(beer.category || '');
      beerDomain.setCity(beer.city || '');
      beerDomain.setCountry(beer.country || '');
      beerDomain.setState(beer.state || '');
      beerDomain.setWebsite(beer.website || '');
      return beerDomain;
    }

    throw new Error('Missing properties to create domain.');
  };

  public async create(beer: IBeer) {
    const beerDomain = this.createBeerDomain(beer);
    return this._repository.create(beerDomain);
  }
}

export default BeerService;
