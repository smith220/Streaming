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
    
        <form action='' onSubmit={codeSubmit} 
        className=' flex flex-col items-center justify-center' >

       
        {console.log(RoomCode)}
      <label className='font-bold text-[20px] pt-12 ' htmlFor=''>Enter the room code</label>
     <input type='text' placeholder=' 
     Enter Room Code' value={RoomCode}
     onChange={(e)=>{setCode(e.target.value)}}
     className='bg-blue-500 '></input>
     <button type='submit'>Enter Room</button>
     </form>
    </div>
  )
}
