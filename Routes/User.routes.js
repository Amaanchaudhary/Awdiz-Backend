import { Router } from "express";
import { addCart , allCartProducts } from "../Controllers/User.controller.js";

const router = Router();

router.post("/add-cart" , addCart)
router.post("/all-cart-products", allCartProducts)


export default router;