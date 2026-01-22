import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { userdatacontext } from '../context/Usercontext'
import { setposts } from '../Redux/companySlice'
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
const Application = () => {
  let {posts} = useSelector((state)=>state.company)
  console.log(posts)
  let navigate = useNavigate()
  let {server} = useContext(userdatacontext)
  let dispatch = useDispatch()
  const deletepost=async(id)=>{
    try{
  let result = await axios.get(`${server}/posts/deletepost/${id}`,{
    withCredentials:true
  })
  console.log(result.data);
  dispatch(setposts(result.data))
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-full min-h-screen bg-[#000000b4] '>
        <BsBoxArrowLeft className='text-[30px] text-[white] ml-5 ' onClick={()=>navigate("/")}/>
        <h1 className='text-white text-center text-4xl mb-15 pt-4'>Here All upload posts</h1>
        <div className='w-[95%] flex flex-wrap justify-center'>
          { posts && posts.map((items)=>{
            return (<div className='border gap-4 p-4 m-4 bg-white w-[300px] h-[300px] flex  flex-col rounded-2xl items-center justify-evenly'>
              <p className='text-black text-[25px] font-bold'>{items.jobtitle}</p>
              <p className='text-black text-[15px] font-semibold'>Job details : {items.jobdescription}</p>
              <button className='w-[90%]  py-3 bg-[aqua] focus:text-[red] border rounded-2xl' 
              onClick={()=>deletepost(items._id)}>Delete</button>
            </div>)
          })}
        </div>
    </div>
  )
}

export default Application