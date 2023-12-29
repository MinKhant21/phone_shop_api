const {Category} = require('../models')

export const getCategoryInteractor = async () => {
     try {
          return await Category.findAll({
               attributes:['category_id','name']
          });  
     } catch (error:any) {
          throw error(error)
     }
}

export const addCategoryInteractor = async ({addCategoryPersistence}:any,name:string) => {
     
     try {
        let category =   await addCategoryPersistence(name);
        return category
         
     } catch (error:any) {
          throw error(error)
     }
}