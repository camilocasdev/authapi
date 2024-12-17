import mongoose from "mongoose"

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://camilocastillo3090:4LsPWVxT94b9SMJO@atlas01.z5izm.mongodb.net/?retryWrites=true&w=majority&appName=atlas01";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

export const dbrun = async function run() {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    }
}




export const dbconnect = async function connect() {
    mongoose.connect("mongodb://localhost:27017/hoteldb", {
}, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(db => console.log('Se conecto a la DB'))
.catch(error => console.log(error))
}
