# Desafio para o processo seletivo Orma Carbon

Repositório destinado aos interessados em participar do processo seletivo da Orma Carbon


## 🚀 Começando

Antes de utilizar o projeto, é necessario ter Git, Docker/Docker-compose e npm/yarn instalado na máquina.



## 📃 Sobre
  <p>
    Estruturar uma aplicação backend, dockerizada, cujo objetivo é salvar o banco de dados e criar uma nova API com dados do json, e também realizar alguns desafios propostos pela empresa Orma Carbon.
  </p>


## 🛠️ Ferramentas

## - Front-End:
  - React
  - Typescript
  - Vite
  - React Router Dom
  - React Hooks
  - Css modules
  - Axios
  
## - Back-End:
  - Node
  - Typescript
  - Express
  - Cors
  - Mongodb
  - Swagger
  - Eslint
  - GitHub CI/CD
  - Chai/Mocha
  - mongoose
  - Shell
  - Migrate-mongo

## ⚙️ Como executar

Será necessário que a porta 3000 e 3001 estejam disponíveis para a aplicação, Mongodb usará a porta 27017.

1 - Clone o repositório em uma pasta de sua preferencia 
```
git@github.com:AiramToscano/backend-test-two.git
```
2 - Suba o docker-compose, todas as depêndencias serão automaticamente instaladas
```
npm run compose:up   // para subir a aplicação
npm run compose:down // para parar completamente a aplicação
```
3 - Após rodar o comando, aguarde um pouco que a aplicação irá ficar disponivel nas seguintes rotas:

  `- Front-End: http://localhost:3000`

  `- Back-End: http://localhost:3001`

  <p> Caso algum container tiver com o status unhealty, você poderá acessar a aplicação localmente, instalando as dependências  `npm install`, tanto no <code>/app/frontend</code> quanto no <code>/app/backend</code></p>

  <p>E logo após a instalação das dependências, rode os comandos <code>npm run dev</code> no Frontend e o comando <code>npm run dev</code> no Backend</p>

  <p>Caso queria rodar localmente, irá precisar ter o mongoDB instalado na máquina ou em um container docker, com o a url `mongodb://localhost:27017/testtwo` </p>

# Back-End

## 1 - Rotas dos estoques da Cerveja - Beers

Para testar as rotas basta subir o backend, as rotas estão documentadas no swagger.

- `http://localhost:3001/api-docs/` - Documentada pelo Swagger.


### ⚙️ Executando os testes

Para essa aplicação back-end, foi feito testes unitarios, cobrindo 100% da aplicação.

- `npm run test:dev` - Para rodar os testes unitários.

- `npm run test:coverage` - Para rodar os testes junto com a cobertura da aplicação.

Testes back-end com quase 100% de cobertura.



# Front-End

![recipes](https://github.com/AiramToscano/backend-test-two/blob/main/app/gif/testProject.gif)


# 🎁 Expressões de gratidão

- Gostaria de agradecer a Orma Carbon  por esse desafio, aprendi muito com esse projeto, a cada um novo desafio se torna um novo aprendizado.
