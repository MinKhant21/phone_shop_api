import { where } from "sequelize"

const {Category} = require('../models')

export const addCategoryPersistence = async (name:string)  => {
     try {
          let category = await Category.findOne({where:{name:name}})
          if(category) return null
          return await Category.create({name:name})
     } catch (error:any) {
          throw error(error)
     }
}
export const updateCategoryPersistence = async ({ name, category_id }: any) => {
     try {
         const existingCategory = await Category.findOne({ where: { category_id } });
 
         if (!existingCategory) {
             return null; // No category found with the given category_id
         }
 
         const [rowCount] = await Category.update(
             { name },
             { where: { category_id } }
         );
 
         if (rowCount > 0) {
             const updatedCategory = await Category.findOne({ where: { category_id } });
 
             console.log(`Category with category_id ${category_id} updated successfully.`);
             console.log(updatedCategory);
             return updatedCategory;
         } else {
             console.log(`No rows were updated for category_id ${category_id}.`);
             return null;
         }
     } catch (error) {
         console.error('Error updating category:', error);
         return error;
     }
 };