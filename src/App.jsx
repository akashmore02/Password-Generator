import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [Password, setPassword] =useState("")
  const [Length, setLength] = useState(8)
  const [AllowedNumber, setAllowedNumber] = useState(false)
  const [AllowChar, setAllowChar] = useState(false)
  const[Ablenumber, SetAblenumber]=useState(false)
  const[Ablechar, SetAblechar]=useState(false)


  
  const passwordgenerator = useCallback(()=>{
    let Pass=""
    let str1= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(AllowedNumber) str1 = "0123456789"    
    if(AllowChar) str1 = "!@#$%^&*-_+=[]{}~`"

    for(let i=0; i<Length; i++)
      {
        let index = Math.random()*str1.length
        Pass += str1.charAt(index)
      }

      setPassword(Pass)
 
  },[Length, AllowedNumber, AllowChar, setPassword])

useEffect(()=>{passwordgenerator()},[Length, AllowedNumber, AllowChar, passwordgenerator])

let copytocursor = ()=>{
  window.navigator.clipboard.writeText(Password)
}

  return (
  <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white'>
    <div>
      <div className=' text-slate-700 text-xl w-auto'>
        Password Generator: 
      </div>

      <div className=' outline outline-gray-300 outline-2 h-10 rounded-sm mt-4 text-slate-700'>
        <div className=' p-2'>
        {Password}
        </div>
      </div>

      <div>
        <button className=' text-white p-2 bg-black p-auto mt-4  rounded-md mb-4' onClick={()=>{copytocursor}}>Copy</button>
      </div>
    </div>
    <input 
    type="range"
    min={6}
    max={40}
    value={Length}
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <p>Password Length: {Length}</p>
    <br />

    <div className='flex flex-wrap flex-row'>
    <input 
    className='mr-2'
    type="checkbox"
    defaultChecked={AllowedNumber}
    disabled={Ablenumber}
    onClick={()=>{setAllowedNumber(!AllowedNumber)
      SetAblechar(!Ablechar)
    }}/>

    <p>Numbers</p>

      <input className=' text-black ml-2 mr-2'
        type="checkbox"
        defaultChecked={AllowChar}
        disabled={Ablechar}
        onChange={() => {
          setAllowChar(!AllowChar),
          SetAblenumber(!Ablenumber)
      }}
      />
      <p>Characters</p>
      </div>
      </div>
  </>
  )
}

export default App
