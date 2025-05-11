import express from 'express';
import cors from 'cors';
import { dbConnect } from './config';
import { AuthRouter } from './routes';
import { Application } from 'express';

const server: Application = express();

/* Config */
dbConnect(process.env.MONGO_URL);

/* Middlewares */
server.use(express.json());
server.use(cors());

/* Rutas */
server.use('/api/v1/auth', AuthRouter)


export default server;

