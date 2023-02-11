import { model, Schema } from 'mongoose';
import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';
import {
  CouponInterface,
  CouponUpdateInterface
} from '../interfaces/Coupons/Coupon.interface';

export const CoupounSchema = new Schema({
  name: String,
  description: String,
  discount_max: {
    type: Number,
    required: true
  },
  created_by: {
    type: String
  },
  status: String,
  found_on: {
    type: Object,
    name: {
      type: String,
      required: true
    },
    website: {
      type: String
    }
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

class CoupounsModel {
  private readonly Coupon = model('coupons', CoupounSchema);

  async create(Coupon: CouponInterface) {
    try {
      return await this.Coupon.create(Coupon);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async deleteById(id: string) {
    try {
      return await this.Coupon.deleteOne({
        _id: id
      });
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async findAll() {
    try {
      return await this.Coupon.find();
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async update(id: string, couponUpdate: CouponUpdateInterface) {
    try {
      return await this.Coupon.findByIdAndUpdate(
        {
          id
        },
        couponUpdate
      );
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async findById(id: string) {
    try {
      return await this.Coupon.findById(id);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new CoupounsModel();
