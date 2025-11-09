import express from 'express';
import cors from 'cors';
import indexroutes from '../routes/index.routes.js';
import * as db from '../DB/cnn_mogodb.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT ||3000;
        this.generalRoute = '/api/';

        //Conectar a base de datos
        this.conectarDBMongo();

        // Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDBMongo() {
        if(!db.isConected){
            await db.conectarAMongoDB();
        }
   }
    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }
    routes() {
        //localhost:000/api/ejemplo
        this.app.use(this.generalRoute, indexroutes);
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`.yellow);
        });
    }
}

