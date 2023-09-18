const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    HOSid:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20
    },
    ProviderName:{
        type:String ,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    ActionPerformed:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20
    },
    remarks:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    taskTitle:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:40
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:500
    }
   },
   {
    timestamps:true
})


const TaskModel=mongoose.model('Tasks',TaskSchema);

module.exports=TaskModel