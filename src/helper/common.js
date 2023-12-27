
const {User} = require('../models')

exports.checkUser = async (data,{type}) => {
     switch (type) {
          case "FIND_ID":
               return await User.findOne({
                    where:{
                         'user_id' : data
                    }
               })
          case "ADD":
               return await User.findOne({
                    where:{
                         'email' : data
                    }
               })
          default:
               return await User.findAll({
                    attributes:['user_id','name','email','role']
               })
               
     }
     
}