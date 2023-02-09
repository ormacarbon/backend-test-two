import Sequelize from 'sequelize';
import config from '../config/database';

import Brewery from '../models/Brewery';

const connection = new Sequelize(config);

Brewery.init(connection);
