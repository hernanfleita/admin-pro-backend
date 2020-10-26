const express = require('express');
require('dotenv').config();

const { dbConneccion } = require('./database/config');

//Crear el servidor de expres
const app = express();


//Configurar Cors
app.use( cors() );

//Base de Datos
dbConneccion();

console.log( process.env );

//Rutas
app.get('/',(req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto:::' + process.env.PORT );
});

//p3LNM0zeC6ae1Jca

