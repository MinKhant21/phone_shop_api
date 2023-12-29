const {Category} = require('../models')

export const getCategoryInteractor = async (getCategoryPersistence : Function) => {
     try {
          return await getCategoryPersistence()
           
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

export const updateCategoryInteractor  = async ({updateCategoryPersistence} : any,{name,category_id} : any ) => {
      
     try {
         return await updateCategoryPersistence({name,category_id});
     } catch (error:any) {
          return error
     }
}

export const delCategoryInteractor  = async ({delCategoryPersistence} : any, category_id : any ) => {
      
     try {
         return await delCategoryPersistence(category_id);
     } catch (error:any) {
          return error
     }
}