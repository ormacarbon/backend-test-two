import { Router } from "express";
import { AllDataFromJson } from "./controller/AllDataFromJson";
import { getProducts } from "./controller/allProducts";
import { createProduct } from "./controller/createProduct";
import { deleteProduct } from "./controller/deleteProduct";
import { getProduct } from "./controller/readProduct";
import { updateProduct } from "./controller/updateProduct";
import { Schemas, Validation } from "./validation/validation";

const router = Router()

router.post('/createProduct',Validation(Schemas.data), createProduct)
router.post('/addData', AllDataFromJson)
router.delete('/delete/:id', deleteProduct)
router.get('/product/:id', getProduct)
router.get('/products', getProducts)
router.put('/update/product/:id', updateProduct)


export default router