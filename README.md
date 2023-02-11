# mkvlrn/ormacarbon-backend-test

## running in dev

### pre-requisites to run locally

- node.js 18 (developed with v18.14.0)
- yarn (developed with v1.22.19)
- docker with compose (developed with docker v20.10.22 build 3a2c30b, compose v2.15.1)
- postgres docker image

### how to

#### run development

after cloning, copy the contents of `.env.example` into a new `.env` file, then:

```bash
# install dependencies
yarn install

# start db container
docker compose up -d

# run db migrations, only needed once per schema change
yarn prisma migrate dev

# start app in dev mode
yarn dev
```

#### run unit tests

```bash
yarn test
```

#### test using postman

after starting dev mode, import the collection in this repo inside the `postman` dir

## running in prod

live version is deployed to <https://mkvlrn-ormacarbon-backend-test.up.railway.app>

## the project

express.js REST api written in typescript as an [esm module](https://nodejs.org/api/esm.html) (that's why node 18 is required) with a fully validated openapi/swagger documentation as frontend

### mandatory requirements

- [x] original project, with my own code
- [x] postman collection for testing
- [x] crud endpoints
- [x] endpont for total listing
- [x] db (postgres)

### optional requirements

- [ ] solid principles - not quite, but just enough
- [ ] use golang - nope
- [x] performant code
- [x] english in the entire project
- [x] dependency injection
- [x] frontend - i chose to create a fully validated openapi documentation that consumes the api, because i know you won't be dazzled by my mediocre react skills
- [x] deploy somewhere - it's [here](https://mkvlrn-ormacarbon-backend-test.up.railway.app/)!

### some technical stuff

#### project structure

if you know [nest.js](https://nestjs.com/), you'll see a bit of it's convention in my code - i've been working with nest for the better part of the last 12 months, so it's in my brain

#### choice of database and orm

postgres is an easy choice for pretty much anything, and [prisma](https://prisma.io/) is so much better than [typeorm](https://typeorm.io/) that it becomes the default for me every time, although i can work with typeorm if needed

#### vscode and all the devDependencies

all my typescript projects tend to use the same tools to guarantee some sort of consistency, and i've created my own template/guide type thing to get it done each time

it's done only once at the start of the project and you just don't think about it too much in the long run, but it helps a lot with quality

my vscode config just allows for better - or more dynamic - typescript development, with linting and formatting done on the fly

the other tools i've been using are:

- [tsx](https://github.com/esbuild-kit/tsx) - blazing fast alternative to ts-node, it just works, and it's great with esm modules, since it allows for aliases out of the box
- [eslint](https://github.com/eslint/eslint) - with a pretty comprehensive and well rounded configuration based on airbnb's guide, with a few tweaked rules
- [prettier](https://github.com/prettier/prettier) - because your code needs to be 💄 **B E A U T I F U L** 💄
- [commitlint](https://github.com/conventional-changelog/commitlint) - to lint commit messages using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec
- [jest](https://github.com/facebook/jest) - testing is life
- [lint-staged](https://github.com/okonet/lint-staged) - to run all these tools on staged files
- [husky](https://github.com/typicode/husky) - to tie up all tools and run lint-staged on commits

## that's it

thank you for the consideration
