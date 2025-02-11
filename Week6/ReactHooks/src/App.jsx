import React, { useEffect, useState } from "react";
import UseEff from "./components/UseEff";
import Idfetch from "./components/Idfetch";
import MemoHook from "./components/MemoHook";
import CallbackHook from "./components/CallbackHook";
 
const App = () => {
  
  return (
    <div>
        {/* <UseEff/> */}
        {/* <Idfetch id={2}/> */}
        {/* <MemoHook/> */}
        <CallbackHook/> 
    </div>
  );

   
}
export default App;
