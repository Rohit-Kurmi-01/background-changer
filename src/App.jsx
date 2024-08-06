import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("linen")
  const [text, setText] = useState("Black")

  return (
    
      <div className='w-full h-screen duration-200'
      style={{backgroundColor : color }}>
        <h1 
      class='font-black text-9xl transition-colors'>
          hello ji</h1>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            onClick={(prev)=> setColor("Red") }
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "red"}}
            >Red</button>

            <button
            onClick={()=> setColor("Pink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Pink"}}
            >Pink</button>

            <button
            onClick={()=> setColor("Orange")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Orange"}}
            >Orange</button>

            <button
            onClick={()=> setColor("Yellow")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Yellow"}}
            >Yellow</button>


            <button
            onClick={()=> setColor("Violet")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Violet"}}
            >Violet</button>

            <button
            onClick={()=> setColor("Blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Blue"}}
            >Blue</button>

            <button
            onClick={()=> setColor("Purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Purple"}}
            >Purple</button>

            <button
            onClick={()=> setColor("Green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Green"}}
            >Green</button>

            <button
            onClick={()=> setColor("Aqua")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Aqua"}}
            >Aqua</button>


            <button
            onClick={()=> setColor("Goldenrod")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Goldenrod"}}
            >Goldenrod</button>


            <button
            onClick={()=> setColor("Brown")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Brown"}}
            >Brown</button>

            <button
            onClick={()=> setColor("White")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "White"}}
            >White</button>


            <button
            onClick={()=> setColor("Gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor : "Gray"}}
            >Gray</button>
            




          </div>
        </div>
      </div>
    
  )
}

export default App
