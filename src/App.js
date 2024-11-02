import React,{useState} from 'react';
import './App.css';
function App(){
  const[count,setCount]=useState(0);
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  const reset=()=>setCount(0);
  return(
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>SIMPLE COUNTER APP</h1>
      <h2>{count}</h2>
      <button className="inc" onClick={increment}>INCREMENT</button>
      <button className="dec" onClick={decrement}>DECREMENT</button>
      <button className="res" onClick={reset}>RESET</button>
    </div>


  );
}
export default App;