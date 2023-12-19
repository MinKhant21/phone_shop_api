import express, { Request, Response } from 'express';
import { where } from 'sequelize';
const {hashPassword } = require('../helper/auth')
const {Category,User} = require('../models')
const {checkUser} = require('../helper/common')
/** Products */
export const getProduct =  async (req:Request,res:Response) => {

}

export const addProduct =  async (req:Request,res:Response) => {
     let {...data} = req.body
     console.log(req.body)
     res.json({
          data:data
     })
}

export const updateProduct =  async (req:Request,res:Response) => {

}

export const delProduct =  async (req:Request,res:Response) => {

}

/** User */

export const getUserList = async (req:Request,res:Response) => {

}

export const addUser = async (req: Request, res: Response) => {
     try {
         const { name, email, password } = req.body;
 
         if (!(name && email && password)) {
             throw new Error("Incomplete data provided");
         }
 
         const hashPwd = await hashPassword(password);
         const existingUser = await checkUser(email);
 
         if (existingUser) {
             return res.status(500).json({
                 status: 500,
                 message: "User already exists"
             });
         }
 
         const user = await User.create({
             name,
             email,
             password: hashPwd
         });
 
         return res.status(200).json({
             status: 200,
             data: user,
             message: "Successfully created user"
         });
     } catch (error : any) {
         return res.status(500).json({
             status: 500,
             message: error.message || "An error occurred"
         });
     }
 };
 

export const updateUser = async (req:Request,res:Response) => {

}

export const delUser = async (req:Request,res:Response) => {

}


/** Category */

export const getCategory = async (req:Request,res:Response) => {
     let categories = await Category.findAll({
          attributes:['category_id','name']
     });
     res.json({
          status : 200,
          categories : categories ,
          message : "Categories List"
     });
}

export const addCategory = async (req:Request,res:Response) => {
     let {...data} = req.body
     let category = await Category.create({name:data.name})
     res.json({
          status : 200,
          data:category,
          message : "Successfully Created"
     })
}

export const updateCategory = async (req:Request,res:Response) => {
     let category = await Category.update({name:req.body.name},{
          where:{
               'category_id' : req.query.id
          }
     })
     if(category){
          res.json({
               status:200,
               message : "Successfully Updated"
          })
     }else{
          res.json({
               status:500,
               message : "Wrond Category Id"
          })
     }
 }
 

export const delCategory = async (req:Request,res:Response) => {
     let category =     await Category.destroy({
               where:{
                    'category_id' : req.query.id
               }
          })
     if(category){
          res.json({
               status:200,
               message : "Successfully Deleted"
          })
     }else{
          res.json({
               status:500,
               message : "Wrond Category Id"
          })
     }
}



