import { where } from "sequelize"

const {User} = require('../models')
const {hashPassword} = require('../helper/auth')
export const signUpPersistence = async  ({name,email,password}:any) => {
     try {
          let exit_user = await User.findOne({where:{
               "email":email
          }})
          if(exit_user) return null
          
          let user = await User.create({name,email,password:await hashPassword(password)})
          console.log(user)
          return user
     } catch (error) {
          return error
     }
}