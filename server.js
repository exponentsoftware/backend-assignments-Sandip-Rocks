const express= require('express');
const mongoose=require('mongoose');
const app=express();

const bodyParser=require('body-parser');
// set up the port number
const port = 3000;

// importing the DataBase
// const conn = require('./config/connect');

// importng the Schema For tasks
const  Task  = require('./model/todo');

// Routes Pending
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/soal-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
    console.log("DB CONNECTED");
  });
app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
})