const {createNewTask,getAllTodos, deleteTodos, updateTodos}=require("../controller/todo.controller");
const express=require("express");
const router=express.Router();
router.post("/newTask",createNewTask);
router.get("/allTodos",getAllTodos);
router.delete("/deleteTodos/:id",deleteTodos);
router.put("/updateTodo/:id",updateTodos);
module.exports=router;