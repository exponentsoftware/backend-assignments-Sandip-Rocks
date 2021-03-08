const express= require('express');
const mongoose=require('mongoose');
const app=express();


// set up the port number
const port = 3000;

// importing the DataBase
const conn = require('./config/connect');

// importng the Schema For tasks
const  Task  = require('./model/todo');

// using express


// rendering the App Page

app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
})