import React, { useContext, useState } from 'react'
import { CountContext } from '../Context';

const PropDrilling = () => {
    const [count,setCount]=useState(0);

 // wrap anyone who wants to use the teleported value inside the provider 
  return (
    <div>
    <CountContext.Provider value={count}> 
       <Count  setCount={setCount} />
    </CountContext.Provider>
    </div>
  )
}

function Buttons({setCount}){
    const count=useContext(CountContext);
    return <div>
        <button onClick={()=>{
            setCount(count+1);
        }}>
            Increasing Count
        </button>
        <button onClick={()=>{
           setCount(count-1);
        }}>
            Decreasing Count
        </button>
    </div>
}

function Count({setCount}){
    return (
        <div>
            <CountRender/>
            <Buttons setCount={setCount}/> 
        </div>
    )
}
function CountRender(){
    const count=useContext(CountContext);
    return <div>
        {count}
    </div>
}

export default PropDrilling
