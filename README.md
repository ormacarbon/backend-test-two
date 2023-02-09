<h1>Orma Carbon</h1>

<p align="center">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Esbuild-100000?style=for-the-badge&logo=esbuild&logoColor=white&labelColor=black&color=ffcf00"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

- [📑 About the project](#-about-the-project)
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

## 📑 About the project

The server uses [Winston](https://github.com/winstonjs/winston) and the native debug for log and debug.Winston is a logger for Node.js based on [log4J](https://logging.apache.org/log4J/2.x/).

The code written in TypeScript is transpilated to JavaScript using [Esbuild](https://esbuild.github.io/). Esbuild is an open source compiler that is faster than Babel. Written in GO, [tsx](https://github.com/esbuild-kit/tsx) was used for project automatic build.In addition, the [tsup](https://tsup.egoist.dev/) for server bundle, which is faster than [tsc](https://www.typescriptlang.org/docs/handbook/compilers-Options.html).

For communication, [Express](https://expressjs.com/en-br/) has been selected for being a lightweight, easy-to-use framework. In addition. With adding a Rate Limit Middleware layer for the routes [Express-rate-limit](https://github.com/express-limit/express-limit) and [Cors](https://github.com/expressjs/cors). And Helmet for security [Helmet](https://helmetjs.github.io/).

Finally, for unit tests the [Jest](https://jestjs.io/) was the framework responsible for unit tests performed. In addition, the [supertest](https://github.com/ladjs/supertest) was used to test the routes with integration tests.

## 📦 Dependencies

- Server:

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

- PORT=3000

### Install

```bash
npm install
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
