import React, { useEffect, useState } from 'react';
import img from './Live Streaming Now Logo.gif';
import './Header.css'
import { Link } from 'react-router-dom';
import {AiOutlineAlignLeft } from "react-icons/ai";;

function Header() {
    const [sticky,setSticky]=useState( false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 10 ? setSticky(true) : setSticky(false);
            console.log(sticky);
        })
            },)
  return (
 
    <div className=' header  flex justify-between'>
      <div className='head  leading-none flex text-neutral-900  text-st flex-col' >

      <div className='smith cursor-pointer span ml-3 mb-0 flex' style={{   color:sticky?'#374151':''}}>
    
    Smith  
    <img
          className=" img rounded-2xl ml-6 mt-4"
          src={img} alt='' 
        />
    
    </div>  
   <div className='text  mt-0'> &nbsp;&nbsp;&nbsp;Streammer</div>

   </div>
  < div className=' tag mr-6 text-white flex flex-row  mt-8  cursor-pointer ' style={{}}>
    <Link to='/login'>
    <div className='ml-5  hover:text-red-700 h-10 rounded-2xl 'style={{   color:sticky?'#374151':''}} > Login</div>
    
    </Link>
    <div className='ml-5  hover:text-red-700 h-10 rounded-2xl' style={{   color:sticky?'#374151':''}}> About Us</div>
    <div className=' mr-17 ml-5 sm:mr-16  hover:text-red-700 h-10 rounded-2xl  ' style={{   color:sticky?'#374151':''}} > Contact</div>
   
         </div>
    </div>
  
  
  )
}

export default Header
