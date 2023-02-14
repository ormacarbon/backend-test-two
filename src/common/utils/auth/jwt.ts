import * as dotenv from 'dotenv';
dotenv.config();
import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';

class JWT {
  access_token(id: string): string {
    return jwt.sign(
      {
        id
      },
      String(process.env.SECRET),
      {
        expiresIn: '1d'
      }
    );
  }

  reflesh_token(id: string): string {
    return jwt.sign({ id: id }, String(process.env.SECRET), {
      expiresIn: '7d'
    });
  }

  decrypt(token: string): string | JwtPayload | null | JsonWebTokenError {
    try {
      const data = jwt.decode(token);

      return data;
    } catch (err) {
      return err as JsonWebTokenError;
    }
  }
}

export default new JWT();
