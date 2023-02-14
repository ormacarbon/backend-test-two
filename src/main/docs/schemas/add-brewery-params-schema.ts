export const addBreweryParamsSchema = {
  type: 'object',
  properties: {
    abv: {
      type: 'number'
    },
    address: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    coordinates: {
      type: 'array'
    },
    country: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    ibu: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    website: {
      type: 'string'
    }
  },
  require: ['abv', 'ibu']
}
