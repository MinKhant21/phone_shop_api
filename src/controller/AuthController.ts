"use strict";  
import express, { Request, Response } from 'express';
import { where } from 'sequelize';
const {User} = require('../models')
const {generateToken} = require('../helper/auth')
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
               .then((result:any)=>{
                    if(result){
                         const token =  generateToken(result['name'])
                         res.json({
                              status : 200,
                              data:result,
                              token : token,
                              message : "Successfully Login"
                         })
                    }else{
                         res.json({
                              status : 500,
                              message : "Incorrect Email and Password "
                         })
                    }
               })
     } catch (error) {
          console.log(error)
     }

}