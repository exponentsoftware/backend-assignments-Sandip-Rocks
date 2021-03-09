const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Username is required."]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    status:{
        type:Boolean,
        default:false
    },
    category: {
        type: String,
        enum:["Work","Hobby","Task"],
        required: true
    }
},
{ timestamps: true });

const todo=mongoose.model('task',taskSchema);

module.exports=todo;