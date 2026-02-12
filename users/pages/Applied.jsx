import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { userdatacontext } from '../context/Usercontext';
import { useSelector } from 'react-redux'
const Applied = () => {
          let [resume, setresume] = useState(null);
          let [username,setusername] = useState("")   
          let [email,setemail] = useState("")   
          let [phonenumber,setphonenumber] = useState("")
          let [address,setaddress] = useState("")
          let {server} = useContext(userdatacontext)
          let {postid} = useSelector((state)=>state.user)
          console.log(postid)
          let navigate = useNavigate()
          const apply=async(e)=>{
                    e.preventDefault()
                    try{
         if (!resume) {
      return alert("Please upload resume");
    }        
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phonenumber", phonenumber);
    formData.append("address", address);
    formData.append("resume", resume); 
    if(!postid){
  alert("postid not found");
  return;
}
    
let result = await axios.post(`${server}/posts/apply/${postid}`,formData,{withCredentials:true})
         console.log(result.data)
         alert("Applied successfully");
    navigate("/");
          }catch(err){
                    console.log(err)
          }
                    }
         
  return (
    <div className='w-full min-h-screen bg-[#000000b4] flex flex-col items-center gap-4'>
          <BsBoxArrowLeft className='text-[30px] text-[white]  fixed left-0' onClick={()=>navigate("/")}/>
         <h1 className='text-white text-[40px] text-center pt-[30px]'>Apply job</h1>
         <form onSubmit={apply} className='flex flex-col w-[90%] gap-8 items-center mb-[40px]'>
         <div className='flex flex-col text-white w-[90%] '>
           <label htmlFor="username" className='text-[25px] font-medium'>username</label>
           <input type="text" id='username' placeholder='Enter user name...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setusername(e.target.value)} value={username}/>
         </div>
         <div className='flex flex-col text-white w-[90%] '>
           <label htmlFor="email" className='text-[25px] font-medium'>email</label>
           <input type="text" id='email' placeholder='Enter email...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setemail(e.target.value)} value={email}/>
         </div>
         <div className='flex flex-col text-white w-[90%] '>
           <label htmlFor="phonenumber" className='text-[25px] font-medium'>phone number</label>
           <input type="number" id='phonenumber' placeholder='Enter phone number...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setphonenumber(e.target.value)} value={phonenumber}/>
         </div>
         <div className='flex flex-col text-white w-[90%] '>
           <label htmlFor="address" className='text-[25px] font-medium'>Address</label>
           <input type="text" id='address' placeholder='Enter address here...' className='border  px-6 py-4 bg-white placeholder:text-black rounded-lg text-black' onChange={(e)=>setaddress(e.target.value)} value={address}/>
         </div>
         <div className='flex flex-col text-white w-[90%] '>
  <label htmlFor="resume" className='text-[25px] font-medium'>Resume (PDF/DOC)</label>
  <input
    type="file"
    id="resume"
    accept=".pdf,.doc,.docx"
    className='border px-6 py-4 bg-white rounded-lg text-black'
    onChange={(e) => setresume(e.target.files[0])}
  />
</div>

         <button type='submit' className='bg-[#0ef90e] px-8 py-4 w-[80%] border rounded-lg text-[25px] text-black focus:bg-[grey]'>Uplaod</button>
         </form>
        </div>
  )
}

export default Applied
