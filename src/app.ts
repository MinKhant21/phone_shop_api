import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
const morgan = require('morgan')

//For env File 
dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));



app.get('/', (req: Request, res: Response) => {
     res.send('Welcome to Express & TypeScript Server');
});

export default app;
