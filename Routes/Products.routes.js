import {Router} from 'express'
import { addProduct, getllProducts } from '../Controllers/Products.controller.js';
import { checkUserID } from '../Middleware/AllMiddleware.js';

const router = Router();

router.post("/add-product" , checkUserID , addProduct);
router.post("/get-all-product" , checkUserID , getllProducts);


export default router;