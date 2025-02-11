import React, { memo, useCallback, useState } from "react";

const CallbackHook = () => {
  const [count, setCount] = useState(0);
 
  // now when it is wrapped inside the callback it will not render if its child changes 
  // Hence this way callback dec rendering and used as optimization 
  const  onClick =useCallback(()=>{
    console.log("child clicked");
  },[])

  return (
    <div>
      <Child onClick={onClick} /> 
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count is {count}{" "}
      </button>
    </div>
  );
};

// here using memo makes it like it will not render unless its inner things not changes even other dynamic values changes 
const Child = memo(({ onClick }) => {
  console.log("child render");
  return (
    <>
      <button onClick={onClick}>Button Clicked</button>
    </>
  );
});

export default CallbackHook;
