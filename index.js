const express=require("express");
const cors = require("cors");
const app=express();
const port=3000
const connectDB=require("./db/db");
const todoRouter=require("./routes/todo.routes");
app.use(express.json());
app.use(cors());
app.use("/api/todo",todoRouter);
app.listen(port,()=>{
    console.log(`The server running on ${port}`);
})
