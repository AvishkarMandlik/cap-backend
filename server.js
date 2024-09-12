const express = require('express');
const app = express();
const bodyparser = require('body-parser');

require("dotenv").config();
const {connect ,disconnect} = require("./mongoConn.js");

app.use(bodyparser.json());
app.use(express.static('public'));


app.get('/', async(req, res) => {
    const db =  await connect();
    const collection = db.collection('documents');

    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    res.send(insertResult);
});

app.listen(3000, ()=>{
    console.log('Sever listenning on Port 3000')
});