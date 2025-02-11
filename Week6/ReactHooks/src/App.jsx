import React from "react";

const App = () => {
  return (
    <div>
      <CardWrapper>Hi There</CardWrapper>
      <CardWrapper><CardWrapper>Hi Helo</CardWrapper></CardWrapper>
      
    </div>
  );

  function CardWrapper({ children }) {
    return (
      <div style={{ border: "2px solid black", padding: 20 }}>
        {children}
      </div>
    );
  }
};

export default App;
