import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoReceiptOutline } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { FaRegAddressBook } from "react-icons/fa";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
const Nav = () => {
  let [show,setshow] = useState(false)
  let navigate = useNavigate()
  return (
    <div className='relative'>
      {!show && <FaArrowRightToBracket className='text-[30px] text-[white] ml-5 ' onClick={()=>setshow(true)}/>}
      
        <div className={`w-[35%] fixed top-0 left-0  min-h-screen border-r-1  flex flex-col items-center gap-4 sm:w-[27%] transform transition-transform duration-500 ${show ? "translate-x-0":"-translate-x-full"} bg-[white] text-black`}>
          <BsBoxArrowLeft className='text-[30px] text-[black] mr-[80%]' onClick={()=>setshow(false)}/>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={()=>navigate("/")}>
        <p className='font-bold text-[30px]'><IoHomeOutline /> </p>
          <span className='font-semibold text-[30px]'>Home</span>
       </div>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={()=>navigate("/companies")}>
        <p className='font-bold text-[30px]'><HiOutlineBuildingOffice /></p>
          <span className='font-semibold text-[20px]'>Companies</span>
       </div>
       <div className='w-[100%] h-[50px] flex border mt-[70px] items-center gap-3.5 justify-evenly' onClick={()=>navigate("/users")}>
        <p className='font-bold text-[30px]'><FaRegAddressBook /></p>
          <span className='font-semibold text-[20px]'>Users</span>
       </div>
    </div>
    </div>
  )
}

export default Nav