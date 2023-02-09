import BreweryModel from '../model/Breweries.Schema';
import supertest = require('supertest');
import app from '../app';

describe('Should return errors codes response of routes relational with breweries', () => {
  beforeEach(async () => {
    await BreweryModel.saveData({
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
  });

  afterEach(async () => {
    await BreweryModel.deleteMany();
  });

  it('Shoud return 403 for user existing', async () => {
    const response = await supertest(app)
      .post('/api/v1/brewelers')
      .send({
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
        website: 'google.com.br'
      });

    expect(response.statusCode).toBe(403);
  });

  it('Shoud return 403 for invalid datas', async () => {
    const response = await supertest(app)
      .post('/api/v1/brewelers')
      .send({
        abv: 1,
        category: 'Hot drinks',
        city: 'dancing street',
        coordinates: [434, 5454],
        country: 'United States',
        description: 'a good day',
        name: 54,
        state: 'california',
        website: 'google.com.br'
      });

    expect(response.statusCode).toBe(403);
  });

  it('Shoud return 200 to find brewely from name', async () => {
    const response = await supertest(app).get(
      '/api/v1/brewely/dancingwithdrinks'
    );

    expect(response.statusCode).toBe(200);
  });
});
