import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { FaAddressCard } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { setpostid } from '../redux/userSlice';
const Posts = () => {
  let {userdata,copyuserdata} = useSelector((state)=>state.user)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  return (
    <div className='w-full min-h-screen bg-[#00000048] '>
        <div className='w-[95%] flex flex-wrap justify-center'>
          { copyuserdata && copyuserdata.map((items)=>{
            return (<div className='border gap-4 p-4 m-4 bg-white w-[300px] h-[300px] flex  flex-col rounded-2xl items-center justify-evenly'>
               <p className='text-[50px] text-[red]'><FaAddressCard /></p>     
              <p className='text-black text-[25px] font-bold'>{items.jobtitle}</p>
              <p className='text-black text-[15px] font-semibold'>Job details : {items.jobdescription}</p>
              <button className='bg-[#61ee61] px-23 py-3 rounded-2xl border focus:text-[red]' onClick={()=>{dispatch(setpostid(items._id));navigate("/apply")}}>Apply</button>
            </div>)
          })}
        </div>
    </div>
  )
}

export default Posts