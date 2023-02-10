import { model, Schema } from 'mongoose';
import catchErrorsFunctions from '../common/utils/catchErrorsFunction';
import {
  CouponInterface,
  CouponUpdateInterface
} from '../interfaces/Coupons/Coupon.interface';

export const CoupounSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId
  },
  description: String,
  discount_max: {
    type: Number,
    required: true
  },
  created_by: {
    type: String
  },
  avaliable: {
    type: Object,
    name: {
      type: String,
      required: true
    },
    website: {
      type: String
    }
  },
  found_on: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

class CoupounsModel {
  Coupon = model('coupons', CoupounSchema);

  async create(Coupon: CouponInterface) {
    try {
      return await this.Coupon.create(Coupon);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async deleteById(id: string) {
    try {
      return await this.Coupon.create(id);
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
}

export default new CoupounsModel();
