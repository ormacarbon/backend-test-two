import express from "express";

import routes from "./routes";
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running 🚀");
});


// TODO: Criação e Configuração do servidor com express e TypeScript
// TODO: Instalar dependências
// TODO: Criação do banco com mongoDB
// TODO: Conexão com o banco de dados
// TODO: Adicionar os itens do JSON fornecido no banco de dados
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
// TODO: Garantir que não ira ocorrer duplicidade ao rodar o script
// TODO: Criação do model, view e controller
