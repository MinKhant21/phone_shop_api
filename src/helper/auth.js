const bcrypt = require('bcrypt')
const dotenv  = require('dotenv')
dotenv.config();

const  bcryptFormat = process.env.BCRYPT_ROUND

exports.hashPassword = (password)  => {
     return bcrypt.hash(password,1*12)
}