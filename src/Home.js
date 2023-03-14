import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import auth from './firebase';
import { FaLaugh } from "react-icons/fa";
import './home.css'
import img from './Live Streaming Now Logo.gif'


export default function Home() {
    const [RoomCode,setCode] =useState(null);
    const [user,setuser]=useState('');
      const navigate = useNavigate(null);
      const handleAuthantication=(e)=>{
       
          auth.signOut()
       
       
        navigate('/login')
      
      }
    const codeSubmit=(e)=>{
        e.preventDefault();
        if(RoomCode===null){
 alert(' Please input name & you have to login')
        }
        else{
          navigate(`/Room/${RoomCode}`)
        }
       

    }
    useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        setuser(authUser.email)
        console.log('user',authUser.email);
        if(authUser){
          setuser(authUser.email)
        }
        else{
          setuser(null)
        }
      })

    },[])

  return (
   <div>  
   <div className='video h-[623px]  absolute'>
      <div className='text-4xl text-white text-st flex-col ml-9 mt-5  ' >
        <div className='span mb-0 flex' style={{   color:'#374151'}}>
     
        <span className='smith mt-2'>  Smith  </span>     
    <img
          className=" rounded-2xl ml-6 mt-2"
          src={img} width='100px'
          alt=''
        />
    
    </div>  
   <div className='text text-2xl mt-0'> &nbsp;&nbsp;Streammer </div>
  <div className='info sm:font-[8px]  flex float-right -mt-5  mr-8 ' > Hello! &nbsp;&nbsp;<span className='text-yellow-300 sm:mt-2 mt-4 mr-1'><FaLaugh/>&nbsp;</span> {user===''?',Guest':`,${user}`} 

  &nbsp;<button onClick={handleAuthantication} 
  className='mr-5 hover:bg-red-900 p-3 rounded-xl sm:text-[13px] -mt-2 font-bold '> {user?'Sign Out':'Sign In'}</button>
  </div>
   </div>
  
  
        <form action='' onSubmit={codeSubmit} 
        className=' flex flex-col items-center justify-center ml-50 mt-44' >

       
           
      <label className='enter font-bold   flex justify-center pt-9 justify-items-center text-white' htmlFor=''>
        Enter room name</label>
    {user? <input type='text' placeholder=' 
     Enter Room Name' value={RoomCode}
     onChange={(e)=>{setCode(e.target.value)}}
     className=' w-[290px] h-[30px] mt-5 mb-5 rounded-3xl text-center'></input>:''}
     { <button type='submit' className='text-white bg-red-600 w-28 h-12 text-[20px] rounded-3xl'>Go Live</button>}
     </form>
 
    </div>
    <div className='footer bg-black h-5 w-60 text-black'> Copy Right belongs to Obi Smith Okechukwu</div>

    </div>
  )
}
