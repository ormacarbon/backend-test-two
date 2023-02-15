import IBeer from '../../Interfaces/IBeer';
import beerObjectSchema from './schemas';

class ValidationsInputs {
  static validateBeerObject(beer: IBeer) {
    const { error } = beerObjectSchema.validate(beer);

    if (error) {
      const { message } = error;
      return { isError: true, message };
    }

    return { isError: false, message: 'It\'s okay.' };
  }
}

export default ValidationsInputs;
