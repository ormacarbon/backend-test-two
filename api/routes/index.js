const bodyParser = require('body-parser')
const beers = require('./beerRoute')

module.exports = (server) => {
  server.use(bodyParser.json())

  server.use('/beers', beers)
}
