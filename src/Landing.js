import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
   import Header from './Header';
   import { AiFillCopyrightCircle } from "react-icons/ai";

export default function Landing() {
  
  return (
  <div className='cover h-[633px]' >  
    <div className='cover h-[633px] '   >
  
  <div className=''>
        <Header/>    
    <br/>
  
    <br/><br/>
        <div className='writing ml-16 '>
              <div>
               <span className='text1 space-x-9 ml-5  sm:text-slate-500 text-red-600  font-thin'>Connect </span>  
               <div className='text2 text-[30px] text-white font-sans' >To Make Tremendous </div> <br/>
               <div className='text3 text-[70px] ml-7 text-slate-500 font-thin '> Power Available </div> 
              </div>
        </div>
       
        <div className='btx cursor-pointer relative   text-yellow-50   text-[30px]'> 
                    <Link to='/Signup'>
                    <botton className='   text2 mr-10 hover:bg-red-900 p-3 rounded-xl'>Sign up</botton> 
                    
                    </Link>
                    <Link to='/Login'>
                    <botton className=' text2 mr-10 hover:bg-red-900 p-3 rounded-xl' >Login</botton>
                    
                    </Link>
                    </div>
                
         </div>
    </div>
    <div className='footer sm:text-[2px] bg-black h-5 w-60 p-9 text-black' style={{fontSize:'16px'}}> Copy Right belongs to Obi Smith Okechukwu</div>
  
    </div>
  )
}
