import express from 'express';
import morgan from 'morgan';
import reservart from './routes/reservar.routes.js';
import authrt from './routes/auth.routes.js';
import usersrt from './routes/user.routes.js';
import htmlrt from './routes/html.routes.js';
import { crearRole } from './libs/initialSetup.js';
import cookieParser from 'cookie-parser';

const app = express();

crearRole();

app.set(morgan('dev'));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlrt);
app.use('/reserva', reservart);
app.use('/auth', authrt);
app.use('/restr', usersrt);


export default app;