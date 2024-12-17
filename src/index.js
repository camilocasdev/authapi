import app from './app.js';
import * as db from './database.js';

const port = 3000

try {
    app.listen(port);
    console.log("Se inicio el servidor en el puerto: ", port);

    db.dbconnect();
} catch (error) {
    console.log('Ha ocurrido un error al conectar', error)
}



