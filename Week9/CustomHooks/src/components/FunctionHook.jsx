import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      axios.get("http://shrimo.com/fake-api/todos").then((res) => {
        setTodos(res.data);
        setLoading(false);
      });
    }, n * 1000);
    axios.get("http://shrimo.com/fake-api/todos").then((res) => {
      setTodos(res.data);
      setLoading(false);
    });
  }, [n]); // Add empty dependency array here

  return { todos, loading };
}
const FunctionHook = () => {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

function Todo({ todo }) {
  // Change todos to todo
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default FunctionHook;
