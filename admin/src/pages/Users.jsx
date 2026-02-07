import React from 'react'
import { MdDownloadDone } from "react-icons/md";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authdata } from '../../Context/Authapi';
const Seeapplyjobs = () => {
  let navigate = useNavigate()
  let {usersaccounts} = useContext(authdata)
  return (
    <div className='w-full min-h-screen bg-[#540505]  flex flex-col items-center gap-4 text-white '>
          <BsBoxArrowLeft className='text-[30px] text-[white]  fixed left-0' onClick={()=>navigate("/")}/>
     <h1 className='text-white text-[40px] text-center pt-[30px]'>Applied Jobs</h1>
     <div className='w-[98%] flex flex-col sm:w-[70%] mb-[15px]'>
        {usersaccounts && usersaccounts.map((user)=>(
          <div className='flex w-[100%] border justify-between py-5 px-4 mb-5 text-black bg-white rounded-lg'> 
          <p className='text-[15px]  font-medium sm:text-[25px]'>{user.name}</p>
          <p className='text-[15px]  font-medium sm:text-[25px]'>{user.email}</p>
          <p className='text-[15px]  font-medium sm:text-[25px]
          text-[#18ed18]'><MdDownloadDone /></p>
          </div>
        ))}
     </div>
    </div>
  )
}

export default Seeapplyjobs
