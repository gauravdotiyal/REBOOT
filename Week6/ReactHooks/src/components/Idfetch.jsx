import React, { useEffect, useState } from "react";
import axios from "axios";

const Idfetch = ({id}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async (res) => {
      setTodos(res.data.todos);
      console.log(res.data.todos);
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

export default Idfetch;
