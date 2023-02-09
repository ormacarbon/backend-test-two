import BreweryModel from '../../model/Breweries.Schema';
import supertest = require('supertest');
import app from '../../app';
import MenuModel from '../../model/Menu.Schema';

describe('Should return errors codes response of routes relational with breweries', () => {
  beforeEach(async () => {
    await BreweryModel.deleteMany();
    await MenuModel.deleteMany();
  });

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
      website: 'google.com.br',
      path: 'dancingwithdrinks'
    });

    if (brewely) {
      await MenuModel.store(brewely.id);
    }
  });

  afterAll(async () => {
    await BreweryModel.deleteMany();
    await MenuModel.deleteMany();
  });

  it('Should add a item in menu with status 200', async () => {
    const find = await supertest(app).get('/api/v1/brewely/dancingwithdrinks');

    const add = await supertest(app)
      .post(`/api/v1/menu/${find.body._id}`)
      .send({
        name: 'Caipirinha',
        description: 'Uma otima bebida',
        ingredients: ['limão', 'cachaça', 'corante']
      });

    expect(add.statusCode).toBe(200);
  });
});
