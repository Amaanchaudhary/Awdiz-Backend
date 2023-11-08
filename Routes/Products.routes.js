import {Router} from 'express'
import { addProduct, getllProducts , getSingleProducts , filterProducts} from '../Controllers/Products.controller.js';
import { checkUserID } from '../Middleware/AllMiddleware.js';

const router = Router();

router.post("/add-product" , checkUserID , addProduct);
router.get("/get-all-product" ,  getllProducts);
router.get("/get-single-product" , getSingleProducts);
router.get("/filter-products", filterProducts)



export default router;