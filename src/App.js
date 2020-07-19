import React, { useState } from 'react';


function App() {
  const [count,updateCount] = useState("")
  function onClick(){
    let browser = navigator.userAgent
    updateCount(browser)
  }
  return (
    <div>
      {count}
      <button onClick={onClick}>Show Device</button>
    </div>
  );
}

export default App;
