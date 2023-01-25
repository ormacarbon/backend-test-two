import { postProduct, createBodyValidation } from "./Create";
import { getProduct } from "./GetById";
import { getAllProducts } from "./GetAll";
import { deleteProduct } from "./DeleteById";
import { postProducts } from "./CreateAll";

export {
  postProduct,
  postProducts,
  getProduct,
  getAllProducts,
  deleteProduct,
  createBodyValidation
};

// TODO: GET, POST, DELETE ✅
// TODO: PUT
// TODO: Retornar um erro na criação de produtos com dados imcompletos