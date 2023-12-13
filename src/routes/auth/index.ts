import { Router } from "express";
import  AuthController from '../../controller/AuthController';
const authRoute = Router();

authRoute.post('/login',AuthController.login)

module.exports = authRoute