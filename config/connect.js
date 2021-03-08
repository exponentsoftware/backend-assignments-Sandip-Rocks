const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/todos1',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

const conn=mongoose.connection;

conn.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

conn.once('open',()=>{
    console.log('DB Connected');
})

module.exports=conn;

