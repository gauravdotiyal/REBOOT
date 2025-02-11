const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://gauravdotiyal33:Gaurav123@cluster0.tzvlo.mongodb.net/');
const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
   todo
}