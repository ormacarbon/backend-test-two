# Routes
GET /api/brewery => Return all breweries

POST /api/brewery => Add new brewery

PUT /api/brewery => Update a brewery

DELETE /api/brewery/?id=breweryId => Delete a brewery using a query

DELETE /api/brewery/:breweryId => Delete a brewery using a route param

# App Start 

## Intallation Dependencies
```bash
$ npm install
```

## Running the app
```bash
$ docker compose up -d 
```

App is running in http://localhost:3001

## Test 

```bash
# generate coverage
$ npm run test
```

### Swagger in route http://localhost:3001/api-docs