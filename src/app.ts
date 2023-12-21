import express, {  Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth'
import adminRoutes from './routes/admin/admin';
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const verifyToken = require('./middleware/verify-token')
dotenv.config();

const app: Application = express();

app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
app.use(
     cors()
   );
app.use(express.json());

app.use(express.urlencoded({extended:false}));

let prefix:any = process.env.PRE_FIX;
app.use( prefix ,authRoute)
app.use( prefix ,verifyToken,adminRoutes)

export default app;
