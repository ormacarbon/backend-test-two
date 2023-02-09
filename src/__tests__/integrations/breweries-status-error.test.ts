import BreweryModel from '../../model/Breweries.Schema';
import supertest = require('supertest');
import app from '../../app';
describe('Should test codes response of routes relational with breweries', () => {
  beforeAll(async () => {
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

    await BreweryModel.deleteMany();
  });

  it('Shoud return 201 for create Brewery', async () => {
    const user = await supertest(app)
      .post('/api/v1/brewelers')
      .send({
        abv: 1,
        address: 'Liberdade',
        category: 'Drinks pesados',
        city: 'Sao Paulo',
        coordinates: [434, 5454],
        country: 'brazil',
        description: 'cervejaria',
        ibu: 23,
        name: 'Cervejaria dos tops',
        state: 'Sao Paulo',
        website: 'cervejariadostops.com.br'
      });

    expect(user.statusCode).toBe(201);
  });

  it('Shoud return 200 for Breweries list', async () => {
    const user = await supertest(app).get('/api/v1/brewelers');

    expect(user.statusCode).toBe(200);
  });

  it('Shoud return 204 for delete Brewery', async () => {
    const find = await BreweryModel.findByName('Dancing with driks');

    if (find) {
      const user = await supertest(app).delete(`/api/v1/brewelers/${find.id}`);
      expect(user.statusCode).toBe(204);
    }
  });

  it('Shoud update with status 200 a Brewery', async () => {
    const find = await BreweryModel.findByName('Dancing with driks');

    if (find) {
      const user = await supertest(app)
        .delete(`/api/v1/brewelers/${find.id}`)
        .send({
          website: 'cervejariadastops.com.br'
        });
      expect(user.statusCode).toBe(200);
    }
  });
});
