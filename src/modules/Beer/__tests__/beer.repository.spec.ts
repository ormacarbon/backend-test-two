import { BeerRepository } from '@modules/Beer/beer.repository';
import { AppDataSource } from '@database';
import { BeerEntity } from '@entity';

const entityPropsKeys = [
  'abv',
  'address',
  'category',
  'city',
  'lat',
  'long',
  'country',
  'description',
  'ibu',
  'name',
  'state',
  'website',
];

function entityAssign(target: BeerEntity, source: BeerEntity) {
  entityPropsKeys.forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    target[key] = source[key as keyof BeerEntity];
  });

  return target;
}

jest.useFakeTimers({ legacyFakeTimers: true });

describe('BeerRepository', () => {
  const repository = BeerRepository;
  const mockedBeer = new BeerEntity();

  mockedBeer.abv = 5.5;
  mockedBeer.address = '123 Main St';
  mockedBeer.category = 'IPA';
  mockedBeer.city = 'San Francisco';
  mockedBeer.lat = 37.7749;
  mockedBeer.long = -122.4194;
  mockedBeer.country = 'USA';
  mockedBeer.description = 'A hoppy IPA';
  mockedBeer.ibu = 70;
  mockedBeer.name = 'Hoppy IPA';
  mockedBeer.state = 'California';
  mockedBeer.website = 'https://hoppyipa.com';

  it('should save a beer', async () => {
    const newBeer = await BeerRepository.save(mockedBeer);

    expect(newBeer).toEqual(mockedBeer);
  });

  it('should update a beer', async () => {
    const _id = mockedBeer._id as any;

    const updatedBeer = new BeerEntity();

    Object.assign(updatedBeer, mockedBeer);

    updatedBeer._id = mockedBeer._id;
    updatedBeer.abv = 6.0;

    await BeerRepository.update(_id, updatedBeer);

    const savedBeer = await BeerRepository.findOneBy({ _id });
    expect(savedBeer).toEqual(updatedBeer);
  });

  it('should be list all beers', async () => {
    const result = [];

    result.push(await repository.save(mockedBeer));

    let mockedBeer2 = new BeerEntity();
    mockedBeer2 = entityAssign(mockedBeer2, mockedBeer);
    mockedBeer2.name = 'Hoppy IPA 2';
    result.push(await repository.save(mockedBeer2));

    let mockedBeer3 = new BeerEntity();
    mockedBeer3 = entityAssign(mockedBeer3, mockedBeer);
    mockedBeer3.name = 'Hoppy IPA 3';
    result.push(await repository.save(mockedBeer3));

    const beers = await repository.find();

    expect(beers).toEqual(result);
  });

  it('should delete a beer', async () => {
    const _id = mockedBeer._id as any;

    await BeerRepository.delete(_id);

    const deletedBeer = await BeerRepository.findOneBy({ _id });
    expect(deletedBeer).toBeNull();
  });
});
