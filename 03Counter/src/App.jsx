import {useState} from 'react'
import './App.css'

function App() {
  
  // let counter = 5;
  const [counter, setCounter] = useState(15)


  const AddValue = () => { 
    console.log("value added", counter) 
    if(counter < 85 ) setCounter(counter +12)
  }
  const removeValue = () => {  
    if (counter > 0) { setCounter(counter - 12); }
    // return console.log('error');
  }

  return (
    <>
      <h1>Chai aur react</h1>
  <h2>Counter Value: { counter}</h2>
      <button
        onClick={AddValue}
      >AddValue { counter}</button>
      <br />
      <button onClick={removeValue} >removeValue { counter}</button>
    </>
  )
}

export default App
