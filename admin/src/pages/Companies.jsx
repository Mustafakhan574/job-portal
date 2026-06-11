import React from 'react'
import axios from "axios";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authdata } from '../../Context/Authapi';
const Seeapplyjobs = () => {
  let navigate = useNavigate()
  let {companyaccounts,server,setcompanyaccounts} = useContext(authdata)
  const companydelete=async(id)=>{
          try{
let result = await axios.get(`${server}/company/deletecompany/${id}`,{
  withCredentials:true})
setcompanyaccounts(result.data);
          }catch(err){
            console.log(err?.response?.data?.message)
          }
  }
  return (
    <div className='w-full min-h-screen bg-[#540505]  flex flex-col items-center gap-4 text-white'>
          <BsBoxArrowLeft className='text-[30px] text-[white]  fixed left-0' onClick={()=>navigate("/")}/>
     <h1 className='text-white text-[40px] text-center pt-[30px]'>Companies</h1>
     <div className='w-[98%] flex flex-col sm:w-[70%]'>
        {companyaccounts && companyaccounts.map((user,i)=>(
          <div className='flex w-[100%] border justify-between py-5 px-4 mb-5 text-black bg-white rounded-lg 'key={user._id}> 
          <p className='text-[15px]  font-medium sm:text-[25px]'>{user.company}</p>
          <p className='text-[15px]  font-medium sm:text-[25px]'>{user.email}</p>
          
          <button className='bg-[#fb1b1b] px-4 rounded-2xl hover:text-white'onClick={()=>companydelete(user._id)}>Delete</button>
          </div>
        ))}
     </div>
    </div>
  )
}

export default Seeapplyjobs
