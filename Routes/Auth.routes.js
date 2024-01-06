import {Router} from "express"
import { Login, Register, getCurrentUser , putTest , patchTest } from "../Controllers/Auth.controller.js";

const router = Router();

router.put("/put-test/:id", putTest)  // put use to replace the data
router.patch("/patch-test/:id", patchTest)  // patch use to modify the data

//put, patch, get these all HTTP verbs are allow to take data as params from the url

router.post("/login" , Login)
router.post("/register",Register)
router.post("/get-current-user", getCurrentUser);

export default router