import { useState } from 'react'



export default function BgChanger() {
  const [color, setColor] = useState("lavender");

  return (
   <div className='w-full h-screen  relative duration-200'
   style={{backgroundColor:color}}
   >
    <div className='fixed flex flex-wrap justify-center  inset-x-0 px-2'>
      <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-2 py-3 rounded-3xl m-5">
        <button 
        onClick={()=>setColor('red')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
        style={{backgroundColor: "red"}}
        >Red</button>
        <button 
        onClick={()=>setColor('green')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
        style={{backgroundColor: "green"}}
        >Green</button>
        <button 
        onClick={()=>setColor('blue')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
        style={{backgroundColor: "blue"}}
        >Blue</button>
        <button 
        onClick={()=>setColor('pink')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: "pink"}}
        >Pink</button>
        <button 
        onClick={()=>setColor('purple')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "purple"}}
        >Purple</button>
        <button 
        onClick={()=>setColor('lavender')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-xl'
        style={{backgroundColor: "lavender"}}
        >Lavender</button>
        <button 
        onClick={()=>setColor('white')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-xl'
        style={{backgroundColor: "white"}}
        >White</button>
        <button 
        onClick={()=>setColor('black')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-xl '
        style={{backgroundColor: "black"}}
        >Black</button>
      </div>

    </div>
   </div>
  )
}


