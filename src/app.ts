import express, { Request, Response, Application } from 'express';
const multer = require('multer');
const dotenv = require('dotenv');
const cors  = require('cors')
const morgan  = require('morgan')
const helmet = require('helmet')
import authRoute from './routes/auth';
import adminRoutes from './routes/admin/admin';

dotenv.config();

const app: Application = express();
// Other middleware
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
// Uncomment the cors middleware
app.use(cors());

// Set up body-parser middleware to parse application/x-www-form-urlencoded and application/json

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(helmet());


let prefix: any = process.env.PRE_FIX;
app.use(prefix, authRoute);
app.use(prefix, adminRoutes);

export default app;
