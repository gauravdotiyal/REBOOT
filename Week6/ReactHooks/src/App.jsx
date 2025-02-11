import React, { useEffect, useState } from "react";

 
const App = () => {
 
  const [todos,setTodos]=useState([]);
  
  
  useEffect(()=>{ 
    console.log("helo ")
    setInterval(() => {
      fetch("https://dummyjson.com/todos")
      .then(async(res)=>{
        const response=await res.json();
        setTodos(response.todos);
      })
    }, 10000);
  },[])

  return (
    <div>
      {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
       
    </div>
  );

  function Todo({title,description}){
     return <div>
       <div>
         <h4>Title : {title}</h4>
       </div>
       <div>
         <h5>Description : {description}</h5>
       </div>
     </div>
  }

  
}
export default App;
