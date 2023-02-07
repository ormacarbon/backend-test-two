import 'dotenv/config';
import cors from "cors";
import express from "express";
export const app = express();

import { connectToDatabase } from "./database/database.service";

import productsRoutes from "./routes/products.routes";

connectToDatabase().then(() => {
  app.emit("Pronto");
  console.log("Connected to database");
}).catch((err) => {
  console.log(err);
});

app.use(cors());
app.use(express.json());
app.use(productsRoutes);

app.on("Pronto", () => {
  app.listen(process.env.PORT || 3333, () => {
    console.log("Server is running http://localhost:3000 🚀");
  });
});


// TODO: Criação e Configuração do servidor com express e TypeScript ✅
// TODO: Instalar dependências ✅
// TODO: Criação do banco com mongoDB ✅
// TODO: Conexão com o banco de dados ✅
// TODO: Criação do model, view e controller ✅
// TODO: Adicionar os itens do JSON fornecido no banco de dados ✅
// TODO: Garantir que não ira ocorrer duplicidade ao rodar o script
