const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    task_due:{
        type:String,
        required:false
    },
    category: {
        type: String,
        required: true,
        trim:true
    },
},
{ timestamps: {} });

const todo=mongoose.model('task',taskSchema);

module.exports=todo;