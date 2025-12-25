import React, { useState } from "react"

const App = () =>{
  const Items = [
    {id : 1, name: "sinchana"},
     {id : 2, name: "a"},
      {id : 3, name: "b"}
  ];
  const[count, setCount] = useState(0);
  return(
    <>
      <h1>Hello world</h1>
      <ul>{Items.map(item=><li key={item.id}>{item.name}</li>)}</ul>
      <h3>count is {count}</h3>
      <button onClick={()=>setCount(count +1 )}>+</button>
      <button onClick={()=>setCount(count - 1 )}>-</button>
    </>
  )
}

export default App;