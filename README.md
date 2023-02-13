
# Resumo da aplicação

Aplicação que busca solucionar a situação problema em que, um desenvolvedor anterior corrompeu completamente o banco de dados e a API anterior e sobrou apenas um arquivo .JSON com todas as informações do banco.
A partir disso foram escolhidos algumas tecnologias para auxiliar o desenvolvimento, que serão listadas logo mais, e construído um domínio para determinar um contexto para as cervejas, e a partir de agora sempre que elas forem criadas seguirem um 'padrão minimo' em que ficasse mais organizado e descritivo o banco de dados.

<br />
<br />

## Rodando a aplicação

1. Clone o repositório:

```bash
git clone git@github.com:hgo19/backend-test-two.git
```

2.  Mude para a branch em que o projeto foi desenvolvido

```bash
git checkout hugo-leonardo-dev
```

3.  A aplicação é feita através do docker, para isso suba os containers através do seguinte comando na raiz da aplicação:

```bash
docker-compose up -d --build
```

4.  Verifique se a pasta node_modules aparece agora nos seus diretórios, caso contrário rode o seguinte comando:
```bash
npm install
```

5. A aplicação backend estará rodando na porta 3001, e o front-end está rodando na porta 3000. Sendo assim, utilize o endereço: http://localhost:3000 para acessar o site, e caso queira checar informações do backend utilize o endereço: http://localhost:3001.

<br />
<br />


# Backend Documentação:

  <summary><strong>Tecnologias utilizadas:</strong></summary>

Nessa aplicação foram utilizadas as seguintes tecnologias:

- Docker
- Node.js
- Express.js
- MongoDB
- Typescript
- Mongoose
- Joi

<br />
<br />

<details>
  <summary><strong>Rotas e retornos esperados do backend:</strong></summary>

>**Tem uma coleção de rotas já estipuladas na aplicação para facilitar a navegação e teste de rotas pelo usuário, a coleção se chama 'BeersCollection.postman_collection.json', importe essa colegação em seu postman irá facilitar.**

### Na aplicação foram usados os seguintes endpoints:
<br />

### Beers
- POST `/beers` será criada uma bebida, a partir disso é necessário um body mínimo na requisição, mas também há opções de body mais complexos. Retornará a cerveja cadastrada no banco de dados com status `201`, segue abaixo exemplo de body de requisição:

- body com dados minimos:
```json
  {
    "abv": 10.5,
    "ibu": 123, 
    "name": "Bebida Teste"
  }
```

- body mais completo pode conter os seguintes dados e tipos:
```json
  {
    "id":"string",
    "abv":"number",
    "address":"string",
    "category":"string",
    "city":"string",
    "coordinates":"number[]",
    "country":"string",
    "ibu":"number",
    "name":"string",
    "description":"string",
    "state":"string",
    "website":"string",
  }
```

- GET `/beers` retornará um array com todas as bebidas presentes no banco de dados com o status `200`, da seguinte maneira:

- Exemplo de resposta:
```json
[
    {
        "_id": "63ea566d4201e9a5de3d7f11",
        "abv": 8.918797384901016,
        "address": "141 South Main Street",
        "category": "British Ale",
        "city": "Slippery Rock",
        "coordinates": [
            41.0638,
            -80.0556
        ],
        "country": "United States",
        "description": "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
        "ibu": 104,
        "name": "Stone House Stout",
        "state": "Pennsylvania",
        "website": "http://www.northcountrybrewing.com"
    },
    {
        "_id": "63ea566d4201e9a5de3d7f12",
        "abv": 1.6456070848030202,
        "category": "North American Lager",
        "city": "Dubuque",
        "coordinates": [
            42.5006,
            -90.66460000000001
        ],
        "country": "United States",
        "ibu": 70,
        "name": "Star Big Muddy Brown",
        "state": "Iowa"
    }
    ...
]
```

- GET `/beers/:id` retorna apenas uma bebida do banco de dados com o status `200`, da seguinte maneira:

- Exemplo de resposta:
```json
  {
    "_id": "63ea566d4201e9a5de3d7f15",
    "abv": 12.944867817715801,
    "address": "128 West Main Street",
    "city": "West Dundee",
    "coordinates": [
        42.0981,
        -88.2783
    ],
    "country": "United States",
    "ibu": 112,
    "name": "Belgian Wit",
    "state": "Illinois"
}
```

- PATCH `/beers/:id` atualiza uma bebida de acordo com o id passado, igual quando se cria uma bebida, a atualização mínima requer alguns atributos mas a possibilidade de atributos é maior. Responde com status `200` com o documento atualizado.

- body com atributops minimos para atualizar:
```json
  {
    "name": "Bebida Teste"
  }
```

- body mais completo pode conter os seguintes dados e tipos:
```json
  {
    "id":"string",
    "abv":"number",
    "address":"string",
    "category":"string",
    "city":"string",
    "coordinates":"number[]",
    "country":"string",
    "ibu":"number",
    "name":"string",
    "description":"string",
    "state":"string",
    "website":"string",
  }
```

- DELETE `/beers/:id` deleta uma bebida do banco de dados a partir de um id passado. Retornará um status `204` assim que a bebida for excluída.

<br />
A aplicação tem controle e tratamento de erros, então caso de alguma requisição feita de maneira incorreta aparecerá uma mensagem notificando erro e com um status code correto para a situação.