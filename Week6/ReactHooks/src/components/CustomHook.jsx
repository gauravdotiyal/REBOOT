import React, { useEffect, useState } from 'react'

// anything inside the custom hook needs to be hook or needs to be the component 
function useTodos(){
    const [todos,setTodos]=useState([])

    useEffect(()=>{
        axios.get("").then((res)=>{
            setTodos(res.data.todos);
        },[])
    })

    return todos;
}

const CustomHook = () => {

    const todos=useTodos()

  return (
    <div>
       {todos}
    </div>
  )
}

export default CustomHook
