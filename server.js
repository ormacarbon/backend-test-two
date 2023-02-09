import express from 'express';
import routes from './src/Routes/routes';

const path = require('path');

require('./src/database');

const app = express();
app.use(express.json());

app.use(routes);

// html
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// css

app.listen(2023);
