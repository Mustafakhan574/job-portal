import React from 'react'
import { BsBoxArrowLeft } from "react-icons/bs";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Responses = () => {
let {responses} = useSelector((state)=>state.company)
  let navigate = useNavigate()
  return (
    <div className='w-full min-h-screen bg-[#000000b4] flex flex-col items-center gap-4 text-white'>
              <BsBoxArrowLeft className='text-[30px] text-[white]  fixed left-0' onClick={()=>navigate("/")}/>
         <h1 className='text-white text-[40px] text-center pt-[30px]'>Responses</h1>
         <div className='w-[98%] flex flex-col sm:w-[70%]'>
            {responses && responses.map((posts)=>(
              <div className='flex w-[100%] border justify-between py-5 px-4 mb-5 text-black bg-white rounded-lg'> 
              <p className='text-[10px]  font-medium sm:text-[15px]'>{posts.username}</p>
              <p className='text-[10px]  font-medium sm:text-[15px]'>{posts.phonenumber}</p>
              <p className='text-[10px]  font-medium sm:text-[15px]'>{posts.email}</p>
              <p className='text-[10px]  font-medium sm:text-[15px]'>{posts.post.jobtitle}</p>
              </div>
            ))}
         </div>
        </div>
  )
}

export default Responses
