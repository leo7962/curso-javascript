'use strict'


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://leo7962:Nickelback7962@clusterpruebas-8hedx.azure.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

