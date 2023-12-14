"use strict";  
import express, { Request, Response } from 'express';
import { where } from 'sequelize';
const {User} = require('../models')
interface ReqBody {
     email : string,
     password : string
}
export const login = async (req:Request,res : Response)=> {
     const {email , password} :ReqBody = req.body
     try {
          await User.findOne(
               {
                    attributes:['name','email','role',"user_id"],
                    where:{email:email}
               })
               .then((result:string[])=>{
                    if(result){
                         res.status(200).json({
                              data:result,
                              message : "Successfully Login"
                         })
                    }else{
                         res.status(500).json({
                              message : "Incorrect Gmail and Password "
                         })
                    }
               })
     } catch (error) {
          console.log(error)
     }

}