<h1>Orma Carbon</h1>

<p align="center">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/TypeORM-a-000000?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</p>

![](https://i.imgur.com/hrbLQbw.png)

- [📑 About the project](#-about-the-project)
- [Requirements Status 📋](#requirements-status-)
- [📦 Dependencies](#-dependencies)
- [📥 Package Manager](#-package-manager)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Environment Variables](#environment-variables)
  - [Install](#install)
  - [Run](#run)
  - [Running with docker 🐋](#running-with-docker-)
- [⚙ Tests](#-tests)
- [🔍 SonarQube](#-sonarqube)
- [📖 Docs](#-docs)
- [📝 License](#-license)

<h3>Postman API Collection</h3>

- [[Postman] - Collection URL](https://www.postman.com/zaujulio/workspace/orma-carbon/collection/24892984-f1c5797f-2c44-4734-b936-1ca8c6fd656e?action=share&creator=24892984)

<h3>Project Docs</h3>

- [[Project] - Diagram](./DOCS/diagram.png)

- [[Project] - Thunder API Collection](./DOCS/thunder-collection_orma-carbon.json)

- [[Project] - Postman API Collection](./DOCS/orma-carbon.postman_collection.json)

## 📑 About the project

The server uses [Winston](https://github.com/winstonjs/winston) and the native debug for log and debug.Winston is a logger for Node.js based on [log4J](https://logging.apache.org/log4J/2.x/).

The code written in TypeScript is transpilated to JavaScript using [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html). The [ts-node-dev](https://github.com/wclr/ts-node-dev) is used to run the project in development mode.

For communication, [Express](https://expressjs.com/en-br/) has been selected for being a lightweight, easy-to-use framework. In addition. With adding a Rate Limit Middleware layer for the routes [Express-rate-limit](https://github.com/express-limit/express-limit) and [Cors](https://github.com/expressjs/cors). And Helmet for security [Helmet](https://helmetjs.github.io/).

For unit tests the [Jest](https://jestjs.io/) was the framework responsible for unit tests performed. In addition, the [supertest](https://github.com/ladjs/supertest) was used to test the routes with integration tests.

For the project documentation, [Swagger](https://swagger.io/)/OpenAPI was used. In addition, the [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) was used to generate the documentation.

Finally, the [Typeorm](https://typeorm.io/#/) was used for database connection and migrations. In addition, the [MongoDB](https://www.mongodb.com/) was used as the database.

## Requirements Status 📋

- [x] Originality: Project architecture is based in my boilerplate to a Node.js API [@neith/express](https://github.com/ZauJulio/neith-express)
- [x] SOLID: Single Responsibility Principle is applied
- [x] Postman Collection: Link in the top of the README
- [x] English: All the code is written in English
- [x] Dependency Injection: Dependency Injection is applied
- [x] Documentation: Documentation is applied with Swagger and docstring
- [x] Unit Tests: Unit tests are applied
  - [x] Middleware: Middleware tests are applied
  - [x] Controller: Controller tests are applied
  - [x] Service: Service tests are applied
  - [ ] Repository Layer: tests are not working
  - [ ] Application Layer/E2E: tests are incomplete
  - [ ] GoLang: GoLang is not used, jest is used instead
- [ ] Deployment: Project is not deployed
- [ ] Frontend: I prefer use Swagger Ui to docs and API tests, to whip more in the backend

## 📦 Dependencies

- Server:

  - Typeorm
  - Express
  - Express-rate-limit
  - Express-winston
  - Helmet

- Run, Build and Test:

  - Tsx - Esbuild
  - Tsup - Esbuild
  - Jest

- Base:
  - Cors
  - Debug
  - Dotenv
  - Eslint
  - Prettier
  - Typescript

## 📥 Package Manager

The project was developed using [PNPM](https://pnpm.io/), but you can use any of the package managers below:

- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [PNPM](https://pnpm.io/)

## 📂 Project Structure

the root directory is src/ and contains the following files:

```bash
-> Middlewares         # Validations, authentication, sanitization, etc.
  -> Controllers       # Endpoints, dice, etc.
    -> Services        # Business rules, logic, etc.
```

```bash
├── __tests__/        # Integration tests
├── common/           # Common: general project core files
│   ├── config/         # Config files, like env variables
│   ├── constants/      # Constants files, like enums
│   ├── interfaces/     # Interfaces files
│   ├── types/          # Types files
│   └── utils/          # Utility files, like rules, logger, etc
├── modules/          # Modules: main fragments of the project
│   └── Beer/
│       ├── beer.controller.ts  # Controller with the endpoints
│       ├── beer.middleware.ts  # Middleware with the handlers
│       ├── beer.service.ts     # Service with the main business
│       └── __tests__/  # Unit tests of module
├─ app.controller.ts    # Controller file with all endpoints
├─ app.middleware.ts    # Middleware file with general handlers
├─ app.service.ts       # General services, like docs, static files...
└─ main.ts              # Bootstrap the application
```

## 🚀 Getting Started

Start by defining the environment variables:

### Environment Variables

- NODE_ENV=development
- PORT=8080
- DATABASE_HOST=172.17.0.2
- DATABASE_PORT=27017

### Install

```bash
npm install
```

Run migrations:

```bash
npm run migrate:up
```

### Run

```bash
npm run dev
```

### Running with docker 🐋

Just run:

```bash
docker-compose up -d
```

## ⚙ Tests

```bash
npm run test

# And use test:watch for watch mode
npm run test:watch

# And use test:coverage for generate coverage report
npm run test:coverage
```

## 🔍 SonarQube

```bash
npm run sonar
```

## 📖 Docs

The REST API documentation is based on Openapi/Swagger is available at:

[http://localhost:8080/docs](http://localhost:8080/docs)

## 📝 License

This project is under the MIT license.

<p align="center">
  <strong> Maded with 💜 by: </strong>
  <p align="center">
    <a href="https://github.com/ZauJulio">
      <img src="https://github.com/ZauJulio.png" width="50" height="50" alt="OakAnderson" />
    </a>
  </p>
</p>
````
