import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEff = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/todos").then(async (res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
        
      ))}
    </div>
  );

  function Todo({ title, description }) {
    return <div>
        <h4>title : {title}</h4>
        <h5>description: {description}</h5>
      </div>
    
  }
};

export default UseEff;
