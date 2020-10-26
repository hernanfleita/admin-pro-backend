const mongoose = require('mongoose');


const dbConneccion = async () => {

    try {
        await mongoose.connect( process.env.DB_CNN ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true 
        });         

        console.log('DB on line');


    } catch (error) {
        console.log(error);
        throw new Error('Error en la hora de iniciar la DB, ver logs');

    }
   
}

module.exports = {
    dbConneccion
}