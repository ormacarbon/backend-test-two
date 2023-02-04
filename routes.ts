import { Router } from "express";
import { createProduct } from "./controller/ProductController";

const router = Router()

router.post('/createProduct', createProduct)


export default router