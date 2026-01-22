import React from 'react'
import { useState } from 'react';
import { VscGitStashApply } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { setcopyuserdata, setuserdata } from '../redux/userSlice';
import { MdLogout } from "react-icons/md";
import { useContext } from 'react';
import { userdatacontext } from '../context/usercontext';
const Nav = () => {
  let navigate = useNavigate()
  let [input,setinput] = useState("")
  let {userdata,copyuserdata} = useSelector((state)=>state.user)
  let {handlelogout} = useContext(userdatacontext)
  console.log("copy data",copyuserdata)
  let dispatch = useDispatch()
  const handlesearch=()=>{
    if(input.trim() === ""){
      dispatch(setcopyuserdata(userdata))
      return ;
    }
   let newlist = userdata.filter((item,index)=>{
     return item.jobtitle.toLowerCase().includes(input.toLowerCase())
    })
    dispatch(setcopyuserdata(newlist))
    
  }
  return (
    <div>
    <div className='w-full h-[90px] border border-b-1 bg-purple-300 flex justify-between'>
    <div className='w-[30%] h-[100%] flex justify-center items-center'>
      <p className='font-bold text-[20px] md:text-[30px]' style={{ fontFamily: 'Great Vibes, cursive' }}>JOB-PORTAL</p>
    </div>
    <div className='w-[50%] h-[100%] hidden justify-center items-center sm:flex'>
     <input type="text" placeholder='Search jobs here...'
     className='border w-[100%] h-[70%] rounded-3xl placeholder:text-[black] font-bold pl-3 rounded-r-none' onChange={(e)=>setinput(e.target.value)} value={input} onKeyDown={(e)=>{
      if(e.key === "Enter"){
        handlesearch();
      }
     }}/>
     <button className='border h-[70%] rounded-3xl font-bold px-4 rounded-l-none bg-[aqua]' onClick={handlesearch}>
      Search
     </button>
    </div>
    <div className='w-[30%] h-[100%] flex flex-col justify-center items-center' onClick={()=>navigate("/applied")}>
         <p><VscGitStashApply className='w-[90%] font-bold text-[40px]'/><span className='text-[15px] w-[70%] font-bold'>Applied Jobs</span></p>
    </div>
    <div className='w-[20%] h-[100%] flex flex-col justify-center items-center' onClick={()=>handlelogout()}>
         <p><MdLogout  className='w-[90%] font-bold text-[40px]'/><span className='text-[15px] w-[70%] font-bold'>Logout</span></p>
    </div>
    </div>
    <div className='w-full h-[90px] rounded-2xl flex justify-center items-center px-9 sm:hidden'>
          <input type="text" placeholder='Search jobs here...'
     className='border w-[80%] h-[70%] rounded-3xl placeholder:text-[black] font-bold pl-3 rounded-r-none bg-white' onChange={(e)=>setinput(e.target.value)} value={input} onKeyDown={(e)=>{
      if(e.key === "Enter"){
        handlesearch();
      }
     }}/>
     <button className='border h-[70%] rounded-3xl font-bold px-4 rounded-l-none bg-[aqua]' onClick={handlesearch}>
      Search
     </button>
    </div>
    </div>
  )
}

export default Nav