import { Router } from "express";
import * as AdminController from '../../controller/AdminController'
const adminRoutes = Router();

/** Category  */
adminRoutes.get('/category',AdminController.getCategory);
adminRoutes.post('/category',AdminController.addCategory);
adminRoutes.patch('/category',AdminController.updateCategory);
adminRoutes.delete('/category',AdminController.delCategory);

export default adminRoutes