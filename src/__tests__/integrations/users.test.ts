import supertest from 'supertest';
import app from '../../app';
import { UserCreateInterface } from '../../interfaces/User/User.interface';
import UserService from '../../services/User.service';

describe('Should test datas with status 200+', () => {
  beforeEach(async () => {
    const User: UserCreateInterface = {
      email: 'emalzinhotopzinho@email.com',
      username: 'livewell',
      password: 'senhaforte123'
    };

    await UserService.store(User);
  });

  afterEach(async () => {
    await UserService.deleteMany();
  });

  it('Should create user with status 200', () => {
    const data: UserCreateInterface = {
      username: 'wellwonder',
      email: 'thisnigth1@email.com',
      password: 'openmyeys'
    };

    supertest(app).post('/api/v1/user').send(data).expect(200);
  });

  it('Shoud return all users with status 200', () => {
    supertest(app).get('/api/v1/user').expect(200);
  });
});
