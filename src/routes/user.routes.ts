import { Router } from "express";
import { getUser } from "../controllers/userController";


const router = Router();

router.get("/user", getUser);

export default router;
