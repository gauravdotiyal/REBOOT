// write basic express boilerplate with basic express.json() middleware

const express=require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app=express();
const cors=require('cors');


app.use(express.json());
app.use(cors({}))

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return;
    }
    // put it in mongodb or create a new todo on mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo Created"
    })
})

app.get('/todos',async(req,res)=>{
   const todos=await todo.find({});
   res.json({
    todos
   })
})


app.put('/completed',async  function(req,res){
    const updatePayload=req.body;
    const parsedPayload=upadateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return;
    }       

    await todo.updateOne({
        _id:req.body.id,
    },{
        completed:true,
    }
  )

    res.json({
        msg:"Todo Marked as Completed"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})