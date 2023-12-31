"use strict";  
import express, { Request, Response } from 'express';
import { where } from 'sequelize';
const {User} = require('../models')
const {generateToken} = require('../helper/auth')

const {signUpInteractor} = require('../interactor/AuthInteractor')
const {signUpPersistence} = require('../persistence/AuthPersistence')

interface ReqBody {
     email : string,
     password : string
}

export const signUp = async (req:Request,res : Response)=>{
     let {name,email,password} = req.body
     let user = await signUpInteractor({signUpPersistence},{name,email,password})
     if(user == null){
          res.status(400).json({
               "message" : "User Already Exit"
          })
     }else{
          res.status(200).json({
               data : user,
               message : "User Created"
          })
     }
     
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