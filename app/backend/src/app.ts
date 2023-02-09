import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import Beers from './routes/BeersRoutes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';


const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50, // limit each IP to 50 requests per windowMs
  message: 'Too many accounts created from this IP, please try again after a minute',
});

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(limiter);
app.use(Beers);
app.use(helmet());
app.use(cors());

export default app;