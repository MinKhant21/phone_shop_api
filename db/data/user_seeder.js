const uuid = require("uuid")
const {hashPassword} = require('../../src/helper/auth')
module.exports = async () => {
     return  [{
          user_id : uuid.v4(),
          name : 'admin',
          email:  'admin@gmail.com',
          password :await hashPassword('admin123'),
          role : 'admin',
          createdAt: new Date(),
          updatedAt:new Date()
     }]
}