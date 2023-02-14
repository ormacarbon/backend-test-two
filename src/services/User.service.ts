import bcrypt from 'bcrypt';
import jwt from '../common/utils/auth/jwt';
import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';
import {
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

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      const cryptPassword = await bcrypt.hash(user.password, salt);

      user.password = cryptPassword;

      if (errors.length) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

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
      const data = await UserModel.findAll();

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

      const user = await this.findById(id);
      console.log(user);
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
      return await UserModel.findUserById(id);
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
