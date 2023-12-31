import {Router} from 'express'
import { addProduct, getllProducts , getSingleProducts , filterProducts ,categoryProducts ,paginationProducts, sortingProducts , yourProducts, updateProduct, deleteProduct} from '../Controllers/Products.controller.js';
import { checkUserID } from '../Middleware/AllMiddleware.js';

const router = Router();

router.post("/add-product" , checkUserID , addProduct);
router.get("/get-all-product" ,  getllProducts);
router.get("/get-single-product" , getSingleProducts);
router.get("/filter-products", filterProducts)
router.get("/product-category", categoryProducts)
router.get("/product-pagination" , paginationProducts);
router.get("/product-sorting" , sortingProducts);
router.post("/your-products" , yourProducts);
router.post("/update-product" , updateProduct);
router.delete("/delete-product" , deleteProduct);



export default router;