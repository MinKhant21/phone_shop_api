import { Router } from "express";
import  * as AuthController from '../../controller/AuthController';
const authRoute = Router();

authRoute.post('/login',AuthController.login)

export default authRoute