import { model, Schema } from 'mongoose';
import catchErrorsFunctions from '../common/utils/catchErrorsFunction';
import { UserCreateInterface } from '../interfaces/User/User.interface';

export const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

class UserModel {
  User = model('user', UserSchema);

  async store(user: UserCreateInterface) {
    try {
      return await this.User.create(user);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
  async findByEmail(email: string) {
    try {
      return await this.User.findOne({ email });
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
  async findById(id: string) {
    try {
      return await this.User.findById(id);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async findAll() {
    try {
      const data = await this.User.find();

      return data;
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async deleteMany() {
    try {
      await this.User.deleteMany();
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new UserModel();
