import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import PropDrilling from "./components/PropDrilling";
import { countAtom, evenSelector } from "./store/atoms/Count";
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <RecoilRoot>
      {/* <Count /> */}
      <Todo/>
    </RecoilRoot>
  );
}


function Todo(){
  return <div>
    <input type="title" />
    <input type="description" />
    <button>Add todo</button>
  </div>
}

function Count() {
  console.log("Render")
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer/>
    </div>
  );
}

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {isEven?"It is even" :null}
  </div>
}


function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom); // it renders the whole function
  const setCount=useSetRecoilState(countAtom); // it helps to render only the clicked button not whole function 
  // console.log("Re render")
  return (
    <div>
      <button
        onClick={() => {
          setCount(count =>count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count=>count - 1);
        }}
      >
        Decrease
      </button>
   
    </div>
  );
}

export default App;
