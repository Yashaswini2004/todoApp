const todoModel=require("../model/todo.model");
const createNewTask=async(req,res)=>{
     try{
        console.log(req.body);
        const newTask=await todoModel.create(req.body);
        res.status(200).json({
            message:"Task added successfully",
            data:newTask
        })
     }
     catch(err){
          res.status(500).json({
            message:"Error on adding task",
            error:err.message
          })
     }
}
const getAllTodos=async(req,res)=>{
    try{
     const todos=await todoModel.find();
     if(!todos){
        return res.status(404).json({
            message:"todo list not found",
            data:todos
        })
     }
     res.status(200).json({
        message:"todo list fetched successfully",
        data:todos
     })
    }
    catch(err){
       res.status(500).json({
        message:"error on fetching the todo list",
        error:err.message
     })
    }
}
const deleteTodos=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteTodo=await todoModel.findByIdAndDelete(id);
      if(!deleteTodo){
      return res.status(404).json({
        message:"todo not found"
      })
      }
      res.status(200).json({
        message:"todo deleted successfully",
        data:deleteTodo
      })

    }
    catch(err){
        res.status(500).json({
            message:"error on deleting todos",
            error:err.message
        })

    }
}

const updateTodos = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const updatedTodo = await todoModel.findByIdAndUpdate(id, data, { new: true });

    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error on updating the todo",
      error: err.message,
    });
  }
};

module.exports={createNewTask,getAllTodos,deleteTodos,updateTodos}