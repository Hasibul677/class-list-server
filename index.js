const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.hn6ma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      await client.connect();
      const database = client.db("insertDB");
      const haiku = database.collection("haiku");
      console.log('database connected');
      

    } finally {
      await client.close();
    }
  }run().catch(console.dir);





app.get('/', (req, res)=>{
    res.send('server site is ok !')
});

app.listen(port, ()=>{
    console.log('This port is runnig on', port)
})