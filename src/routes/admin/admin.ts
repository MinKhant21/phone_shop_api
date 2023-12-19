import { Router } from "express";
import * as AdminController from '../../controller/AdminController'

const adminRoutes = Router();


/** Product  */
adminRoutes.get('/category',AdminController.getCategory);
adminRoutes.post('/product/create',AdminController.addProduct);
adminRoutes.patch('/category',AdminController.updateCategory);
adminRoutes.delete('/category',AdminController.delCategory);

/** User  */
adminRoutes.get('/userList',AdminController.getUserList);
adminRoutes.post('/user',AdminController.addUser);
adminRoutes.patch('/user',AdminController.updateUser);
adminRoutes.delete('/user',AdminController.delUser);

/** Category  */
adminRoutes.get('/category',AdminController.getCategory);
adminRoutes.post('/category',AdminController.addCategory);
adminRoutes.patch('/category',AdminController.updateCategory);
adminRoutes.delete('/category',AdminController.delCategory);

export default adminRoutes