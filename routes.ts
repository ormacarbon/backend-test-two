import { Router } from "express";
import { getProducts } from "./controller/allProducts";
import { createProduct } from "./controller/createProduct";
import { deleteProduct } from "./controller/deleteProduct";
import { getProduct } from "./controller/readProduct";
import { updateProduct } from "./controller/updateProduct";

const router = Router()

router.post('/createProduct', createProduct)
router.delete('/delete/:id', deleteProduct)
router.get('/product/:id', getProduct)
router.get('/products', getProducts)
router.patch('/update/product/:id', updateProduct)


export default router