import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const tempFn1 = (e) => {
    console.log('tempFn', e.target.value, typeof(e.target.value));
    let inputNum = parseInt(e.target.value);
    setInput1(inputNum);
  }

  const tempFn2 = (e) => {
    console.log('tempFn', e.target.value, typeof(e.target.value));
    let inputNum = parseInt(e.target.value);
    setInput2(inputNum);
  }

  return (
    <div id="main">
      <input id='input1' onChange={tempFn1}/>
       +
      <input id='input2' onChange={tempFn2}/>
      
      <p id='result'>{input1 + input2}</p>
    </div>
  )
}


export default App;
