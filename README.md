# Beer API

Beer api made for the backend test on Orma Carbon.

[Docs of deployed app](https://beer-api-ormacarbon.herokuapp.com/api-docs/)

## Problem-situation

>Você acabou de ser contratado para uma vaga de desenvolvedor backend de uma empresa que revende cervejas do mundo inteiro. O desenvolvedor anterior corrompeu completamente o banco de dados e a API anterior e sobrou apenas um arquivo .JSON com todas as informações do banco. Seu líder confiou a tarefa de recriar a API e o banco de dados a você.


## Used Technologies
- Node.js
- Javascript
- Express
- MongoDB
- Swagger

# Installation

## Clone this project

```bash
git clone https://github.com/pabloghid/backend-test-two.git
```
## Install dependencies

```bash
npm install
```
## Configure .env
Rename the file .env.example to .env and add your MongoDB

## Run app
```bash
npm run start
```

## Usage

Go to /api-docs to see the endpoints.

You can make a POST request to the /beers/insertData endpoint to insert data from the db.json file into your database. Please note that in the deployed app, the data has already been added.