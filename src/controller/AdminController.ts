import express, { Request, Response } from "express";

import {
  getCategoryInteractor,
  addCategoryInteractor,
  updateCategoryInteractor,
  delCategoryInteractor,
} from "../interactor/CategoryInteractor";
import {
  addCategoryPersistence,
  updateCategoryPersistence,
  getCategoryPersistence,
  delCategoryPersistence,
} from "../persistence/createCategoryPersistence";

import { searchByIdPersistence } from "../persistence/CommonInteractorPersistence";
import { searchByIdInteractor } from "../interactor/CommonInteractor";

const { hashPassword } = require("../helper/auth");
const { checkUser } = require("../helper/common");
export const searchByID = async (req: Request, res: Response) => {
  const { id, module } = req.query as { id: string; module: string };
  try {
    if (!id || !module) {
      throw new Error("ID or Module not provided");
    }
    let data = await searchByIdInteractor(
      { searchByIdPersistence },
      id,
      module
    );
    // Respond with success message or appropriate response
    res
      .status(200)
      .json({ data, message: "Search by ID and module successful" });
  } catch (error) {
    // Handle errors or respond with error message
    //   res.status(400).json({ error: error.message });
  }
};
// interface userBoy{
//      name ?: string,
//      email ?: string,
//      password?:string
// }

// /** Products */
// export const getProduct =  async (req:Request,res:Response) => {

// }

// export const addProduct =  async (req:Request,res:Response) => {
//      console.log(req.body)
//      console.log('hit')
// }

// export const updateProduct =  async (req:Request,res:Response) => {

// }

// export const delProduct =  async (req:Request,res:Response) => {

// }

/** User */

export const getUserList = async (req: Request, res: Response) => {
  try {
    let userList = await checkUser("", { type: "" });
    let users = userList.filter((user: any) => {
      if (user.role != "admin") {
        return user;
      }
    });
    res.json({
      status: 200,
      data: users,
      message: "Users List",
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: error.message || "An error occurred",
    });
  }
};

// export const addUser = async (req: Request, res: Response) => {
//      try {
//          const { name, email, password } : userBoy = req.body;

//          if (!(name && email && password)) {
//              throw new Error("Incomplete data provided");
//          }

//          const hashPwd = await hashPassword(password);
//          console.log(hashPwd)
//          const existingUser = await checkUser(email,{type:"ADD"});
//          if (existingUser) {
//              return res.status(500).json({
//                  status: 500,
//                  message: "User already exists"
//              });
//          }

//          const user = await User.create({
//              name,
//              email,
//              password: hashPwd
//          });

//          return res.status(200).json({
//              status: 200,
//              data: user,
//              message: "Successfully created user"
//          });
//      } catch (error : any) {
//          return res.status(500).json({
//              status: 500,
//              message: error.message || "An error occurred"
//          });
//      }
// };

// export const updateUser = async (req:Request,res:Response) => {

//      let id = req.query.id
//      let {name,email,password} : userBoy = req.body

//      let existingUser = await checkUser(id,{type:"FIND_ID"})
//      if(existingUser){
//           const hashPwd = hashPassword(password);
//           let updatedUser = await User.update({name,email,hashPwd},{where:{'user_id':id}})
//           res.json({
//                status:200,
//                data:updatedUser,
//                message : "Successfully Updated User"
//           })
//      }else{
//           res.json({
//                status:200,
//                message : "Does not exit User"
//           })
//      }
// }

// export const delUser = async (req:Request,res:Response) => {
//      let id = req.query.id
//      let existingUser = await checkUser(id,{type:"FIND_ID"})
//      if(existingUser){
//           await User.destroy({where:{'user_id':id}})
//           res.json({
//                status:200,
//                message : "Successfully Deleted User"
//           })
//      }else{
//           res.json({
//                status:200,
//                message : "Does not exit User"
//           })
//      }
// }

// /** Category */

export const getCategory = async (req: Request, res: Response) => {
  let categories = await getCategoryInteractor(getCategoryPersistence);

  res.json({
    status: 200,
    categories: categories,
    message: "Categories List",
  });
};

export const addCategory = async (req: Request, res: Response) => {
  let category = await addCategoryInteractor(
    { addCategoryPersistence },
    req.body.name
  );
  if (category === null) {
    res.status(500).json({ message: "Category Already exit" });
  }
  res.json({
    status: 200,
    data: category,
    message: "Successfully Created",
  });
};

export const updateCategory = async (req: Request, res: Response) => {
  const name: string = req.body.name;
  const category_id: any = req.query.id;

  const category = await updateCategoryInteractor(
    { updateCategoryPersistence },
    { name, category_id }
  );

  if (category != null) {
    res.json({
      status: 200,
      data: category,
      message: "Successfully Updated",
    });
  } else {
    res.json({
      status: 500,
      message: "Wrond Category Id",
    });
  }
};

export const delCategory = async (req: Request, res: Response) => {
  let category_id: any = req.query.id;

  let category = await delCategoryInteractor(
    { delCategoryPersistence },
    category_id
  );

  if (category) {
    res.json({
      status: 200,
      message: "Successfully Deleted",
    });
  } else {
    res.json({
      status: 500,
      message: "Wrond Category Id",
    });
  }
};
