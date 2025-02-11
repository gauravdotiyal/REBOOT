import React, { useEffect, useMemo, useState } from "react";

const MemoHook = () => {
  const [count, setCount] = useState(0);
  const [input,setInput]=useState(1); 
//   const [sum,setSum]=useState(0);


  // we use this to avoid for loop rendering when count button changes which is quite expensive 
  // we can also do this by using useEffect but it cause use of one more state variable     
  const ans=useMemo(()=>{
    console.log("memo got called")
    let ans=0;
    for(let i=1;i<=input;++i){
        ans=ans+i;
    }
    return ans;
  },[input])
  
//    useEffect(()=>{
//     let ans=0;
//     for(let i=1;i<=input;++i){
//         ans=ans+i;
//     }
//     setSum(ans);
//    },[input])


  function onclickHandler() {
    setCount(count + 1);
  }
  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
        //  problem here is it is re rendering it again and again 
         setInput(e.target.value)
        }}
      />
      <div>sum is {ans}</div>
      <button onClick={onclickHandler}>count ({count})</button>
    </div>
  );
};

export default MemoHook;
