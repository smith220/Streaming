import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './home.css'
export default function Home() {
    const [RoomCode,setCode] =useState('');
      const navigate = useNavigate()
    const codeSubmit=(e)=>{
        e.preventDefault();
        navigate(`/Room/${RoomCode}`)
    }
  return (
    <div>
        <h1 className="">
      Hello world!
    </h1>
    {/* form creation  */}
        <form action='' onSubmit={codeSubmit} 
        className='bg-slate-700 flex flex-col items-center justify-center' >

       
        {console.log(RoomCode)}
      <label className=' bg-gray-800' htmlFor=''>Enter the room code</label>
     <input type='text' placeholder=' 
     Enter Room Code' value={RoomCode}
     onChange={(e)=>{setCode(e.target.value)}}></input>
     <button type='submit'>Enter Room</button>
     </form>
    </div>
  )
}
