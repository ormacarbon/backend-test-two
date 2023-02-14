export const breweryPath = {
  get: {
    tags: ['Brewery'],
    summary: 'API to fetch all breweries',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/brewery'
            }
          }
        }
      },
      204: {
        description: 'Success, but no data to return'
      },
      500: {
        $ref: '#components/serverError'
      }
    }
  },
  post: {
    tags: ['Brewery'],
    summary: 'API to create a brewery',
    requestBody: {
      require: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addBreweryParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Success, but no data to return'
      },
      500: {
        $ref: '#components/serverError'
      }
    }
  },
  put: {
    tags: ['Brewery'],
    summary: 'API for updating a brewery',
    requestBody: {
      require: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateBreweryParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Success, but no data to return'
      },
      403: {
        $ref: '#components/forbidden'
      },
      500: {
        $ref: '#components/serverError'
      }
    }
  },
  delete: {
    tags: ['Brewery'],
    summary: 'API to delete a brewery',
    parameters: [{
      in: 'path',
      name: 'breweryId',
      description: 'brewery ID to be deleted',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      204: {
        description: 'Success, but no data to return'
      },
      403: {
        $ref: '#components/forbidden'
      },
      500: {
        $ref: '#components/serverError'
      }
    }
  }
}
