
const {User} = require('../models')

exports.checkUser = async (email) => {
     let user = await User.findOne({
          where:{
               'email' : email
          }
     })
     return user
}