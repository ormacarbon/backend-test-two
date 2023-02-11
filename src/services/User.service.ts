import bcrypt from 'bcrypt';
import jwt from '../common/utils/auth/jwt';
import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';
import {
  User,
  UserCreateInterface,
  UserLoginInterface
} from '../interfaces/User/User.interface';
import UserModel from '../model/User.Schema';
import { InvalidArgumentError } from './err/Errors';
class UserService {
  async store(user: UserCreateInterface) {
    try {
      const errors: string[] = [];

      const emailAlreadyInUse = await this.findByEmail(user.email);

      if (emailAlreadyInUse) {
        errors.push('Email already in use');
      }

      if (errors.length) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      const cryptPassword = await bcrypt.hash(user.password, salt);

      user.password = cryptPassword;

      const userStore = await UserModel.store(user);

      if (userStore) {
        const access_key = jwt.access_token(userStore.id);
        const reflesh_token = jwt.reflesh_token(userStore.id);

        return {
          user: {
            id: userStore.id,
            username: userStore.username,
            email: userStore.email,
            created_at: userStore.created_at
          },
          access_key,
          reflesh_token
        };
      }
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async findAll() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = await UserModel.findAll().then((value: any) => {
        return value.map((element: User) => ({
          id: element.id,
          username: element.username,
          email: element.email,
          created_at: element.created_at
        }));
      });

      return data;
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async login(user: UserLoginInterface) {
    try {
      const errors: string[] = [];

      const findEmail = await this.findByEmail(user.email);

      if (!findEmail) {
        errors.push('Email not found;');
      } else {
        const comparePassword = await bcrypt.compare(
          user.password,
          findEmail?.password as string
        );

        if (!comparePassword) {
          errors.push('Password invalid');
        }

        if (errors.length) {
          throw new InvalidArgumentError(JSON.stringify(errors));
        }

        if (findEmail) {
          const access_key = jwt.access_token(findEmail.id);
          const reflesh_token = jwt.reflesh_token(findEmail.id);

          return {
            access_key,
            reflesh_token
          };
        }
      }

      throw new InvalidArgumentError('Error: Email not found;');
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async findUserById(id: string) {
    try {
      const errors = [];

      const user = this.findById(id);

      if (!user) {
        errors.push(`Error: User not find`);
      }

      if (errors.length) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      return user;
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async deleteMany() {
    try {
      await UserModel.deleteMany();
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  private async findById(id: string) {
    try {
      return await UserModel.findById(id);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  private async findByEmail(email: string) {
    try {
      return await UserModel.findByEmail(email);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new UserService();
