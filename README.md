# Aplicação Node - Orma Carbon

API HTTP em Node.js com TypeScript, Express e Docker e MongoDB. Tendo como front o React com o Sass.

## Guia de desenvolvimento

Prerequisites:
-  caso não utilize docker é recomendado ter uma versao do node mais atual.
- `yarn` ou `npm` (para gerenciamento de dependências e execução de scripts)
- `docker` e `docker-compose` (para executar o servidor, banco de dados localmente de forma isolada e reproduzível)

### Backend: 

Em primeiro lugar, entrar no diretorio ou code base onde está a aplicação backend:
```sh
cd backend
```
Em segundo se faz necessário preencher as variáveis de ambiente, lembrando que a porta usada e mapeada pelo docker é a 8086 da aplicação e a do banco de dados é a 5432, e no DB_HOST sera o nome do serviço do docker é ```db```, bom o resto das variáveis fica a seu critério:
```
PORT=
MONGOURL=

A mongo url é basicamente essa mongodb://mongo:27017/nomedobanco
o nome do banco coloquei orma_carbon
```
Em seguida é so subir o container docker:

```
sudo docker compose up
```

Sem o docker:
```
npm i
npm run start
yarn start
```

### Frontend

Entrando no diretorio específico:

```sh
cd frontend
```
Depois instalar as dependencias com ```yarn``` ou ```npm```:

```
npm install
yarn
```
Agora é so rodar o script de inicialização que o frontend estará disponível em ```http://locahost:8086```

```
npm run dev
yarn dev
```
Qualquer duvida só me chamar pelo linkedin
```
https://www.linkedin.com/in/gabriel-rodrigues-aaa352207/
```


