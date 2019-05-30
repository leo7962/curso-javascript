'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio').then(
    ()=>{
        console.log("Conexión a la base de datos satisfactorio...");

        //Creación del servidor
        app.listen(port, () =>{
            console.log("Servidor conectado en la URL: localhost:3700");
            
        });
        
    }
).catch(err => console.log(err));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://leo7962:Nickelback7962@clusterpruebas-8hedx.azure.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

