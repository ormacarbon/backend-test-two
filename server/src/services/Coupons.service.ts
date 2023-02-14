import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';
import { handleErrorDatabase } from '../common/utils/err/errorDatabaseHandler';
import { CouponInterface } from '../interfaces/Coupons/Coupon.interface';
import CoupounsModel from '../model/coupons.Schema';
import { InvalidArgumentError } from './err/Errors';

class CoupounsService {
  async findAll() {
    return await CoupounsModel.findAll();
  }

  async create(coupon: CouponInterface): Promise<CouponInterface | unknown> {
    try {
      const create = await CoupounsModel.create(coupon);

      return create;
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const errors = [];

      const findCoupon = await this.findById(id);

      if (!findCoupon) {
        errors.push('coupon not found;');
      }

      if (errors.length) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      await CoupounsModel.deleteById(id);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async findById(id: string) {
    try {
      return await CoupounsModel.findById(id).catch(handleErrorDatabase);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new CoupounsService();
