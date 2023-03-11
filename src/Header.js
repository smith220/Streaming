import React, { useEffect, useState } from 'react';
import img from './Live Streaming Now Logo.gif'
function Header() {
    const [sticky,setSticky]=useState( false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 10 ? setSticky(true) : setSticky(false);
            console.log(sticky);
        })
            },)
  return (
    <div>
      <div className='  fixed w-[1369px] rounded-b-3xl ' style={{backgroundColor:sticky?'#d6d3d1':'', }} >   
        <div className='Header ml-7 mt-4  flex flex-row justify-between '  >
  <div className='text-4xl text-white text-st flex-col' ><div className='span mb-0 flex' style={{   color:sticky?'#374151':''}}>
    
    Smith  
    <img
          className=" rounded-2xl ml-6 mt-2"
          src={img} alt='' width='100px'
        />
    
    </div>  
   <div className='text text-2xl mt-0'> &nbsp;&nbsp;&nbsp;Streammer</div>

   </div>


   <div className='label text-white flex flex-row mr-12 mt-3 text-xl cursor-pointer ' style={{}}>
    <div className=' hover:text-slate-300 hover:border-2  hover:border-amber-600 p-2 rounded-2xl 'style={{   color:sticky?'#374151':''}} > About Us</div>
    <div className='ml-5 hover:text-slate-300 hover:border-2  hover:border-amber-600 p-2 rounded-2xl' style={{   color:sticky?'#374151':''}}> Contact</div>
    <div className='ml-5 hover:text-slate-300 hover:border-2  hover:border-amber-600 p-2 rounded-2xl ' style={{   color:sticky?'#374151':''}} > Connect</div>
         </div>
    </div >
   
    </div> 
    </div>
  )
}

export default Header
