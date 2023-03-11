import React, { useState } from 'react'
 import './Login.css';
 import auth from './firebase'
 import img from './Live Streaming Now Logo.gif'
function Login() {
const [Email, setEmail]=useState('')
const [Password, setPasswword]=useState('')
const signIn=(e)=>{
    e.preventDefault()

}
const register=(e)=>{
    e.preventDefault()
 auth.createUserWithEmailAndPassword(Email,Password).then((auth)=>{  console.log(auth)})

}
  return (
    <div  style={{height:'650px'}}> 
            <div className='text-4xl text-white text-st flex-col ml-9 mt-5' ><div className='span mb-0 flex' style={{   color:'#374151'}}>
    
    Smith  
    <img
          className=" rounded-2xl ml-6 mt-2"
          src={img} width='100px'
          alt=''
        />
    
    </div>  
   <div className='text text-2xl mt-0'> &nbsp;&nbsp;&nbsp;Streammer</div>

   </div>
    <div className=' Login'>
    
               <div className=' w-[400px] h-200px border-2 border-slate-400 p-14 mt-16'>  
                        <div className=' text-3xl mb-6 font-bold' >
                        Sign In
                            </div>  

                            <div className='mb-10'>
                                <label className=' text-[15px] font-bold'>
                                    Email:<br/>
                                </label>  <input value={Email} onChange={(e)=>{ setEmail(e.target.value) }} type='' className='border-2 border-black focus:shadow-2xl w-[290px] h-8'placeholder='Email'  />
                                </div> 

                              <form>            
                            <div>
                                <label className=' text-[15px] font-bold'>
                                    Password:<br/> 
                                </label>  <input  value={Password} onChange={(e)=>{setPasswword(e.target.value)}}   className='border-2 border-black focus:shadow-2xl   w-[290px] h-8' placeholder='Password'
                                    />
                                </div> 
                                <div className='info text-[12px] mt-5 text-slate-600'>
                                   By signin in all users data are stored in firebase a <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;secured database
                                </div>
                        
                                <div onClick={signIn} className=' text-white font-bold bg-red-700 m-9 rounded-3xl justify-center text-center p-2 hover:text-black'>
                                    <button  className=' hover:text-black'>Sign In</button>
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
