import React from 'react';
import './Landing.css';
   import Header from './Header';
   import { Link } from 'react-router-dom';

export default function Landing() {
  
  return (
 
    <div >
     
        <div className='cover relative'>
        <Header/>    
    <br/>
    <br/><br/>
    
    <br/><br/>
        <div className='writing ml-16'>
              <div>
               <span className=' space-x-9 ml-5  text-slate-500 text-[150px]  font-thin'>Connect </span>  
               <div className='text-[30px] text-white font-sans' >To Make Tremendous </div> <br/>
               <div className='text-[70px] ml-7 text-slate-500 font-thin '> Power Available </div> 
              </div>
        </div>
        <br/>
                     <div className='btx cursor-pointer  float-right text-yellow-50 mr-52  text-[30px]'> 
                     <botton className='mr-10 hover:bg-red-900 p-3 rounded-xl'>Sign up</botton> 
                     <Link to='/login'>
                     <botton className='mr-10 hover:bg-red-900 p-3 rounded-xl' >Login</botton>
 
                     </Link>
                     </div>
        </div>
       
    </div>
  )
}
