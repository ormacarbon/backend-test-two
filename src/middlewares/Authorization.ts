import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import jwt from '../common/utils/auth/jwt';
import { InvalidArgumentError } from '../services/err/Errors';
import UserService from '../services/User.service';
export interface CustomRequest extends Request {
  token?: string | JwtPayload;
}

class Authorization {
  async authBearer(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (authorization) {
        const [, token] = authorization.split(' ');

        const decodedToken = jwt.decrypt(token);

        if (!decodedToken) {
          throw new InvalidArgumentError('Invalid token');
        }

        if (typeof decodedToken === 'object') {
          const findUser = await UserService.findUserById(decodedToken.id);

          if (!findUser) {
            throw new InvalidArgumentError('Error: User not find');
          }

          (req as CustomRequest).token = decodedToken;

          next();
        }
      } else {
        throw new InvalidArgumentError(
          'access-denied: Required authorization bearer to proceed'
        );
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new Authorization();
