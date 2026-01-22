import React, { useContext, useState } from 'react'
import axios from 'axios';
import { userdatacontext } from '../context/Usercontext';
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
const Uploadjob = () => {
      let [companyname,setcompanyname] = useState("")   
      let [jobtitle,setjobtitle] = useState("")   
      let [jobdescription,setjobdescription] = useState("")
      let {server} = useContext(userdatacontext) 
      let navigate = useNavigate()
      const uploadjob=async(e)=>{
        e.preventDefault();
        try{
       let result = await axios.post(`${server}/posts/uploadjob`,{
        companyname,jobtitle,jobdescription
       },{withCredentials:true})
       console.log(result.data)
       setcompanyname("")
       setjobtitle("")
       setjobdescription("")
        }catch(err){
          console.log(err)
        }
      }  
  return (
    <div className='w-full min-h-screen bg-[#000000b4] flex flex-col items-center gap-8'>
      <BsBoxArrowLeft className='text-[30px] text-[white]  fixed left-0' onClick={()=>navigate("/")}/>
     <h1 className='text-white text-[40px] text-center pt-[50px]'>Upload Job</h1>
     <form onSubmit={uploadjob} className='flex flex-col w-[90%] gap-8 items-center'>
     <div className='flex flex-col text-white w-[90%]'>
       <label htmlFor="companyname" className='text-[25px] font-medium'>company name</label>
       <input type="text" id='companyname' placeholder='Enter company name...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setcompanyname(e.target.value)} value={companyname}/>
     </div>
     <div className='flex flex-col text-white w-[90%] '>
       <label htmlFor="Job title" className='text-[25px] font-medium'>Job title</label>
       <input type="text" id='job title' placeholder='Enter job title...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setjobtitle(e.target.value)} value={jobtitle}/>
     </div>
     <div className='flex flex-col text-white w-[90%]'>
       <label htmlFor="Job description" className='text-[25px] font-medium'>Job description</label>
       <textarea type="text" minLength={0} maxLength={400} id='job description' placeholder='Enter job description...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setjobdescription(e.target.value)} value={jobdescription}/>
     </div>
     <button className='bg-[#0ef90e] px-8 py-4 w-[80%] border rounded-lg text-[25px] text-black focus:bg-[grey]'>Uplaod</button>
     </form>
    </div>
  )
}

export default Uploadjob