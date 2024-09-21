import {useCallback, useEffect, useState, useRef} from 'react' // importing the react modules

// exporting the component 
export default function Passwordgenerator() {
    // defining the state for creating variables
    // for better state management and memory management 
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
// useRef hook to create the references to the selected tag 
    const passwordRef = useRef(null)
// create a generator function using callback hooks which takes function and the dependencies
    const PasswordGenerator = useCallback(()=>{
        let pass = "" // creating empty string
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // string with alphabet characters

        if(numberAllowed) str += "123456789"; // condition to use numbers by concating with string if selected 
        if(charAllowed) str += "!@#$%^&*_-+=(){}~"; // same process goes  on to characters

        for (let i = 1; i <= length; i++) {  // looping from 1 and equal to the length
            
            let char = Math.floor(Math.random() * str.length + 1); // generating a single character from this
     
            pass +=str.charAt(char);  // passing on empty pass string with concation
        }
        setPassword(pass) // using setpassword function to pass the value to print on the referenced tag

    }, [length, numberAllowed, charAllowed, setPassword])  // defining the dependencies as this function has effect on 
// creating a copy funtion for button copy
    const copyToClipboard = useCallback( ()=>{ 
        passwordRef.current?.select(); // it comes from the useRef hook and check the current value if it has then select or not
        passwordRef.current?.setSelectionRange(0, 3); // gives the selection range from one index to required index
        window.navigator.clipboard.writeText(password)
    }
   ,[password]) // same dependencies as it affect the password
// this hooks is used to invoke the function and stops rerendering the components
    useEffect(()=>{  
              PasswordGenerator()
    }, [length, numberAllowed, charAllowed, PasswordGenerator]) 

  return (
    // absolute top-20 left-11 right-11 styles while connecting to other as bgchanger part
    <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 m-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center m-1'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
            value={password} 
            className='outline-none py-1 px-3 w-full' 
            placeholder='password'
            ref={passwordRef}
            readOnly/>
            <button 
            onClick={copyToClipboard}
            className='outline-none shrink-0 px-3 py-0.5 bg-blue-700 text-white hover:bg-neutral-400 hover:transition-colors'>copy</button>
        </div>

      <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        value={length}
        min={1}
        max={32}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="">Length:{length}</label>
      </div>
      {/* checkbox */}
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id='numberInput'
        defaultChecked = {numberAllowed}
        onChange={()=>{
            setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      {/* characters */}
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id='characterInput'
        defaultChecked = {charAllowed}
        onChange={()=>{
            setCharAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
  )
}
