const app = require('./app');
const loaders = require('./loaders');
loaders.start();

app.listen(3000, () => { console.log('listening on localhost:3000'); });