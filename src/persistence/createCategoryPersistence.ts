import { where } from "sequelize"

const {Category} = require('../models')

export const addCategoryPersistence = async (name:string)  => {
     try {
          let category = await Category.findOne({where:{name:name}})
          if(category) return null
          return await Category.create({name})
     } catch (error:any) {
          throw error(error)
     }
}