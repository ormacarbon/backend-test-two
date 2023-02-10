import BreweryModel from '../../model/Breweries.Schema';
import supertest = require('supertest');
import app from '../../app';
import MenuModel from '../../model/Menu.Schema';
import { randomUUID } from 'crypto';

describe('Should return errors codes response of routes relational with breweries', () => {
  beforeEach(async () => {
    const brewely = await BreweryModel.saveData({
      abv: 1,
      address: 'dancing street',
      category: 'Hot drinks',
      city: 'dancing street',
      coordinates: [434, 5454],
      country: 'United States',
      description: 'a good day',
      ibu: 23,
      name: 'Dancing with drinks',
      state: 'california',
      external_urls: {
        website: 'google.com.br',
        href: `${process.env.ENDPOINT}/dancingwithdrinks`
      },
      website: 'google.com.br',
      path: 'dancingwithdrinks'
    });

    if (brewely) {
      await MenuModel.store(brewely.id);

      const data = {
        name: 'Caipirinha',
        description: 'Limonada de cachaça',
        ingredients: ['limão', 'cachaça'],
        id: randomUUID(),
        owner: brewely.id
      };

      await MenuModel.addMenu(data);
    }
  });

  afterEach(async () => {
    await BreweryModel.deleteMany();
    await MenuModel.deleteMany();
  });

  it('Should list all menus', async () => {
    const add = await supertest(app).get(`/api/v1/menu`);

    expect(add.statusCode).toBe(200);
  });
});
