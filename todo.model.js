const mongoDB=require("mongoose");
const todoSchema=new mongoDB.Schema({
    taskName:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String,
        required:true
    },
    taskStatus:{
        type:String,
        required:true,
        enum:["completed","pending"],
        default:"pending"
    },
    date:{
        type:Date,
        default:Date
    }
});
const todoModel=mongoDB.model("todos",todoSchema);
module.exports=todoModel;