import { where } from "sequelize";

const { Category, User } = require("../models");

export const searchByIdPersistence = async (id: string, module: string) => {
  let res = await Category.findOne({ where: { category_id: id } });
  return res;
};
