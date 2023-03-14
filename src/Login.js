import React, { useState } from 'react'
 import './Login.css';
 import { useNavigate } from "react-router-dom";
 import auth from './firebase'
 import img from './Live Streaming Now Logo.gif';
 import { Link } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
const [Email, setEmail]=useState('')
const [Password, setPasswword]=useState('')
const [url , SetUel]=('');
const signIn= async (e)=>{
    e.preventDefault()
  await   auth.signInWithEmailAndPassword(Email,Password).then((auth)=>{ if(auth){
      navigate('/home')
      } console.log(auth)}).catch(err=>{alert(err.message);})
}
const register=(e)=>{
    e.preventDefault()
 auth.createUserWithEmailAndPassword(Email,Password).then((auth)=>{ if(auth){
  navigate('/home')
  } console.log(auth)}).catch(err=>{alert(err.message);})

}
  return (
    <div  style={{height:'600px'}}> 
  
    <div className='head cursor-pointer  leading-none flex text-neutral-900 text-st flex-col' >
      <div className='smith span ml-3 mb-0 flex cursor-pointer' style={{   '#374151':''}}>
    <Link to='/'>Smith    </Link>
     
    <img
          className=" img rounded-2xl ml-6 mt-4"
          src={img} alt='' 
        />
    
    </div>  
   <div className='text   mt-0'> &nbsp;&nbsp;&nbsp;Streammer</div>

   </div>
    <div className='h-[200px] Login mb-11'>
    
               <div className=' mt-10 w-[380px] h-[500px] absolute  border-2 border-slate-400 p-14  '>  
                        <div className=' text-3xl mb-6 font-bold' >
                       {window.location.pathname==='/Login '? 'Login':'Create Account'   }      
                            </div>  

                            <div className='mb-10'>
                                <label className=' text-[15px] font-bold'>
                                    Email:<br/>
                                </label>  <input value={Email} onChange={(e)=>{ setEmail(e.target.value) }} type='' className=' text-  border-2 border-black focus:shadow-2xl   w-[290px] h-8'placeholder='Email'  />
                                </div> 

                              <form>            
                            <div>
                                <label className=' text-[15px] font-bold'>
                                    Password:<br/> 
                                </label>  <input  value={Password} onChange={(e)=>{setPasswword(e.target.value)}}   className='border-2 border-black focus:shadow-2xl   w-[290px] h-8' placeholder='Password'
                                    />
                                </div> 
                                <div className='info text-[12px] mt-5 text-slate-600'>
                                   By signin in all users data are stored in firebase , <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;secured database
                                </div>
                        
                                <div onClick={signIn} className=' text-white font-bold bg-red-700 m-9 rounded-3xl justify-center text-center p-2 hover:text-black'>
                                    <button  className=' hover:text-black font-bold'>Sign In</button>
                                </div>
                              </form>
                              <div onClick={register} className=' text-white font-bold bg-red-700 m-9 rounded-3xl justify-center text-center p-2 hover:text-black'>
                                    <button  type='submit' className=' hover:text-black'> Create an account</button>
                                </div>
               </div>
    </div>
    </div>
  )
}

export default Login;
