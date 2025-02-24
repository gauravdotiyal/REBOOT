import React, { useEffect, useState } from 'react'

function Online(){
    const [online,setOnline]=useState(false);;
      
     useEffect(()=>{
        setInterval(() => {
            // console.log("Hi")
            setOnline(false);
            if(window.navigator.onLine){
                setOnline(true);
            }
        }, 3*1000);

        if(window.navigator.onLine){
            setOnline(true);
        }
         
     },[online])

    return online;
}
 
const UserOnlineHook = () => {
    const online=Online();

  return (
    <div>
      {online? "User is Online" : "User is Offline"}
    </div>
  )
}

export default UserOnlineHook
