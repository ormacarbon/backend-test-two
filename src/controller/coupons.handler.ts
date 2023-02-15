import { NextFunction, Request, Response } from 'express';
import ValueIsHeximaDecimal from '../common/utils/err/ValueIsHeximadecimal';
import CouponDTO from '../dtos/Coupons/Coupon.dto';
import { CouponInterface } from '../interfaces/Coupons/Coupon.interface';
import CouponsService from '../services/Coupons.service';

class BreweriesHandlerController {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await CouponsService.findAll();

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body: CouponInterface = CouponDTO.parse(req.body);

      const data = await CouponsService.create(body);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      ValueIsHeximaDecimal(id);

      await CouponsService.delete(id);

      return res.status(204).json({
        message: 'Coupon deleted with suces.',
        statusCode: 204
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new BreweriesHandlerController();
