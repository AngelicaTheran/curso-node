const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        //Directorio publico
        this.app.use(express.static('public'));

    }


    routes() {
        this.app.get('/api', (req, res) => {
            res.send('hello world')
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;