const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/todos1');

const conn=mongoose.connection;

conn.on('error','Unable to connect DB');

conn.once('open',()=>{
    console.log('DB Connected');
})

module.exports=conn;

