import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import reservart from './routes/reservar.routes';
import authrt from './routes/auth.routes'
import usersrt from './routes/user.routes'
import { crearRole } from './libs/initialSetup';

const app = express();

app.set('pkg', pkg);

crearRole();

app.set(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        version: app.get('pkg').version,
        autor: app.get('pkg').author
    });
})

app.use('/reserva', reservart)
app.use('/auth', authrt)
app.use('/restr', usersrt)


export default app;