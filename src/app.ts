import express, {  Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import authRoute from './routes/auth'
const morgan = require('morgan')
dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));

let prefix:any = process.env.PRE_FIX;
app.use( prefix ,authRoute)


app.get('/', (req: Request, res: Response) => {
     res.send('Welcome to Express & TypeScript Server');
});

export default app;
