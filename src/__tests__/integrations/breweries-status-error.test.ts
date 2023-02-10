import BreweryModel from '../../model/Breweries.Schema';
import BreweriesService from '../../services/Breweries.service';
import supertest = require('supertest');
import app from '../../app';

describe('Should return errors codes response of routes relational with breweries', () => {
  beforeEach(async () => {
    await BreweryModel.deleteMany();

    await BreweriesService.store({
      abv: 1,
      address: 'dancing street',
      category: 'Hot drinks',
      city: 'dancing street',
      coordinates: [434, 5454],
      country: 'United States',
      description: 'a good day',
      ibu: 23,
      name: 'dancinngcomsweetdrinks',
      state: 'california',
      website: 'google.com.br'
    });
  });

  afterEach(async () => {
    await BreweryModel.deleteMany();
  });

  it('Shoud return 403 for user existing', async () => {
    const response = await supertest(app)
      .post('/api/v1/breweries')
      .send({
        abv: 1,
        address: 'dancing street',
        category: 'Hot drinks',
        city: 'dancing street',
        coordinates: [434, 5454],
        country: 'United States',
        state: 'california',
        website: 'google.com.br',
        name: 'Dancing with drink'
      });

    expect(response.statusCode).toBe(403);
  });

  it('Shoud return 403 for invalid datas', async () => {
    const response = await supertest(app)
      .post('/api/v1/breweries')
      .send({
        abv: 1,
        category: 'Hot drinks',
        city: 'las vegas',
        coordinates: [434, 5454],
        country: 'United States',
        description: 'a good day',
        name: 54,
        state: 'california',
        website: 'google.com.br'
      });

    expect(response.statusCode).toBe(403);
  });
});
