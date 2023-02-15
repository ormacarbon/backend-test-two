import BreweryModel from '../../model/Breweries.Schema';
import supertest = require('supertest');
import app from '../../app';
import MenuModel from '../../model/Menu.Schema';

describe('Should return errors codes response of routes relational with breweries', () => {
  afterEach(async () => {
    await BreweryModel.deleteMany();
    await MenuModel.deleteMany();
  });

  it('Should list all menus with status 200', async () => {
    const add = await supertest(app).get(`/api/v1/menu`);

    expect(add.statusCode).toBe(200);
  });
});
