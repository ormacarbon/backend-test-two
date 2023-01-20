import { config } from 'dotenv';
import mongoose from "mongoose";
import express from "express";
export const app = express();

import categoriesRoutes from "./routes/categories.routes";

config();
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.emit("Pronto");
  console.log("Connected to database");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(categoriesRoutes);

app.on("Pronto", () => {
  app.listen(3000, () => {
    console.log("Server is running http://localhost:3000 🚀");
  });
});


// TODO: Criação e Configuração do servidor com express e TypeScript ✅
// TODO: Instalar dependências ✅
// TODO: Criação do banco com mongoDB ✅
// TODO: Conexão com o banco de dados ✅
// TODO: Criação das rotas ✅
// TODO: Adicionar os itens do JSON fornecido no banco de dados
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
// TODO: Garantir que não ira ocorrer duplicidade ao rodar o script
// TODO: Criação do model, view e controller
