import BreweryModel from '../../model/Breweries.Schema';
import supertest = require('supertest');
import app from '../../app';
import BreweriesService from '../../services/breweries/Breweries.service';

describe('Should test codes response of routes relational with breweries', () => {
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
      name: 'Dancing with drink',
      state: 'california',
      website: 'google.com.br'
    });
  });

  afterEach(async () => {
    await BreweryModel.deleteMany();
  });

  it('Shoud return 201 for create Brewery', async () => {
    const user = await supertest(app)
      .post('/api/v1/breweries')
      .send({
        abv: 2,
        address: 'Vila do Rosario',
        category: 'Bebidas geladas',
        city: 'Angra do reis',
        coordinates: [434, 5454],
        country: 'brazil',
        description: 'cervejaria',
        ibu: 23,
        name: 'BebidinhaGeladinhaGostosinha',
        state: 'Rio de Janeiro',
        website: 'bebidasgeladas.com.br'
      });

    expect(user.statusCode).toBe(201);
  });

  it('Shoud return 200 for Breweries list', async () => {
    const user = await supertest(app).get('/api/v1/breweries');

    expect(user.statusCode).toBe(200);
  });

  it('Shoud return 204 for delete Brewery', async () => {
    const find = await BreweryModel.findByName('Dancing with drink');

    if (find) {
      const user = await supertest(app).delete(`/api/v1/brewery/${find.id}`);
      expect(user.statusCode).toBe(204);
    }
  });

  it('Shoud update with status 200 a Brewery', async () => {
    const find = await BreweryModel.findByName('Dancing with drink');

    if (find) {
      const user = await supertest(app)
        .delete(`/api/v1/brewely/${find.id}`)
        .send({
          website: 'cervejariadastops.com.br'
        });
      expect(user.statusCode).toBe(200);
    }
  });

  it('Shoud return 200 to find brewely from name', async () => {
    const data = await supertest(app).get('/api/v1/dancingwithdrink');

    expect(data.statusCode).toBe(200);
  });

  it('Shoud return 200 to find All with filters', async () => {
    const response = await supertest(app).get(
      '/api/v1/breweries?country=united+states&state=california&city=las+vegas'
    );

    expect(response.statusCode).toBe(200);
  });
});
