import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  servers: [{
    url: '/api'
  }],
  tags: [{ name: 'Brewery' }],
  paths,
  schemas,
  components
}
