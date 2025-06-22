const mongoDB=require("mongoose");
const connectDB=()=>{
    mongoDB.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority');
    console.log("Database is connected");
}
module.exports=connectDB();