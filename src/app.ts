import express, {  Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth'
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
dotenv.config();

const app: Application = express();



app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
app.use(
     cors()
   );
   app.use(express.urlencoded({ extended: false }));
   app.use(express.json());
let prefix:any = process.env.PRE_FIX;
app.use( prefix ,authRoute)

export default app;
