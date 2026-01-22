import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoReceiptOutline } from "react-icons/io5";
import { TiUploadOutline } from "react-icons/ti";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { FaRegAddressBook } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { useContext } from 'react';
import { userdatacontext } from '../context/Usercontext';
import axios from 'axios'
const Nav = () => {
  let [show,setshow] = useState(false)
  let navigate = useNavigate()
  let {server,handlelogout} = useContext(userdatacontext)
  
  return (
    <div className='relative'>
      {!show && <FaArrowRightToBracket className='text-[30px] text-[white] ml-5 ' onClick={()=>setshow(true)}/>}
      
        <div className={`w-[35%] fixed top-0 left-0  min-h-screen border-r-1  flex flex-col items-center gap-2 sm:w-[27%] transform transition-transform duration-500 ${show ? "translate-x-0":"-translate-x-full"} bg-[white]`}>
          <BsBoxArrowLeft className='text-[30px] text-[black] mr-[80%]' onClick={()=>setshow(false)}/>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={()=>navigate("/")}>
        <p className='font-bold text-[30px]'><IoHomeOutline /> </p>
          <span className='font-semibold text-[30px]'>Home</span>
       </div>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={()=>navigate("/application")}>
        <p className='font-bold text-[30px]'><IoReceiptOutline /></p>
          <span className='font-semibold text-[20px]'>Uploaded job</span>
       </div>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={()=>navigate("/responses")}>
        <p className='font-bold text-[30px]'><FaRegAddressBook /></p>
          <span className='font-semibold text-[20px]'>Responses</span>
       </div>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={
        ()=>navigate("/uploadjob")
       }>
        <p className='font-bold text-[30px]'><TiUploadOutline /></p>
          <span className='font-semibold text-[20px]'>Upload Job</span>
       </div>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={
        ()=>handlelogout()
       }  >
        <p className='font-bold text-[30px]'><TbLogout2 /></p>
          <span className='font-semibold text-[20px]'>Logout</span>
       </div>
    </div>
    
    </div>
  )
}

export default Nav