# **TESTE DE BACKEND by Orma Carbon**

### SITUAÇÃO-PROBLEMA

> Você acabou de ser contratado para uma vaga de desenvolvedor backend de uma empresa que revende cervejas do mundo inteiro. O desenvolvedor anterior corrompeu completamente o banco de dados e a API anterior e sobrou apenas um arquivo .JSON com todas as informações do banco. Seu líder confiou a tarefa de recriar a API e o banco de dados a você.

Neste teste, você deverá criar uma API com endpoints a serem consumidos via REST e um banco de dados, utilizando os dados fornecidos no arquivo. ````db.json````.

### Stack utilizadas: Nodejs(Express), Typescript, MongoDB

---------------------------------------------------------------------

# Passos a seguir

## Clonar repositório

    gh repo clone RobertoAthos/backend-test-two

## Instalar dependências

    npm install

## Rodar o app

    npm run dev


# REST API

Exemplos de requisições.
> você pode usar o link do deploy `https://orma-carbon.onrender.com` para fazer os testes no postman ou insomnia ou o próprio localhost:6000

<br/>


## Inserir os dados do `db.json` no Banco de Dados

### Request

`POST`

    http://localhost:6000/api/addData

### Response

    Irá adicionar todos os dados do db.json

## Listagem de todos os produtos

### Request
> Talvez demore um pouco de fazer essa requisição, pois faz a listagem de 5000 dados

`GET`

    http://localhost:6000/api/products

### Response

    {
        "abv": 12,
        "address":"teste Rua",
        "category": "Teste Categoria",
        "city": "Teste Cidade",
        "coordinates": 124125,
        "country": "Teste País",
        "description": "Teste descrição",
        "ibu":124,
        "name":"Teste Nome",
        "state":"Teste Estado",
        "website": "Teste Website"
    }



## Criar novo produto

### Request

`POST`

     http://localhost:6000/api/createProduct

### Response

     {
        "abv": 12,
        "address": "teste Rua",
        "category": "Teste Categoria",
        "city": "Teste Cidade",
        "coordinates": [
            124125
        ],
        "country": "Teste País",
        "description": "Teste descrição",
        "ibu": 124,
        "name": "Teste Nome",
        "state": "Teste Estado",
        "website": "Teste Website",
        "_id": "63e14b2acb3b517c5075d62a",
        "__v": 0
    }

## Pegar um produto específico

### Request

`GET`

     http://localhost:6000/api/product/{id-do-produto}

### Response

    {
        "_id": "63e14b2acb3b517c5075d62a",
        "abv": 12,
        "address": "teste Rua",
        "category": "Teste Categoria",
        "city": "Teste Cidade",
        "coordinates": [
            124125
        ],
        "country": "Teste País",
        "description": "Teste descrição",
        "ibu": 124,
        "name": "Teste Nome",
        "state": "Teste Estado",
        "website": "Teste Website",
        "__v": 0
    }



## Atualizar dados do produto

### Request

`PUT` <br/>
 
  `http://localhost:6000/api/update/product/{id-do-produto}`

     {
        "abv": 12,
        "address": "teste Rua 2",
        "category": "Teste Categoria 2",
        "city": "Teste Cidade",
        "coordinates": [124125],
        "country": "Teste País",
        "description": "Teste descrição",
        "ibu": 124,
        "name": "Teste Nome",
        "state": "Teste Estado",
        "website": "Teste Website",
    }
     
### Response

    {
        "_id": "63e14b2acb3b517c5075d62a",
        "abv": 12,
        "address": "teste Rua 2",
        "category": "Teste Categoria 2",
        "city": "Teste Cidade",
        "coordinates": [
            124125
        ],
        "country": "Teste País",
        "description": "Teste descrição",
        "ibu": 124,
        "name": "Teste Nome",
        "state": "Teste Estado",
        "website": "Teste Website",
        "__v": 0
    }

## Deletar produto

### Request

`DELETE`

    http://localhost:6000/api/delete/{id-do-produto}

### Response

    {
        "_id": "63e1479acb3b517c5075d625",
        "abv": 12,
        "address": "teste Rua",
        "category": "Teste Categoria",
        "city": "Teste Cidade",
        "coordinates": [
            124125
        ],
        "country": "Teste País",
        "description": "Teste descrição",
        "ibu": 124,
        "name": "Teste Nome",
        "state": "Teste Estado",
        "website": "Teste Website",
        "__v": 0
    }





