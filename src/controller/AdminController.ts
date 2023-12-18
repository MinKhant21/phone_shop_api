import express, { Request, Response } from 'express';
import { where } from 'sequelize';
const {Category} = require('../models')

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



