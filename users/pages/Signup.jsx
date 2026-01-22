import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userdatacontext } from '../context/Usercontext';
const Signup = () => {   
 let [username,setusername] = useState("");   
 let [email,setemail] = useState("");   
 let [password,setpassword] = useState("");   
 let {server,curuser} = useContext(userdatacontext)
let navigate = useNavigate();
 const signup=async(e)=>{
          e.preventDefault()
          try{
    let result = await axios.post(`${server}/users/usersignup`,{
          name:username,email,password
    },{withCredentials:true})
    console.log(result.data)
    curuser()
    navigate("/")
          }catch(err){
                console.log("err in signup",err)    
          }
 }
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-100'>
          <div className=' rounded-lg shadow-md border px-6 py-5 bg-[#f4f5f5] w-[90%] sm:w-[500px]'>
             <h1 className='text-center text-blue-600 font-bold text-3xl mb-6'>Signup Page</h1>
             <form  className='flex flex-col gap-4' onSubmit={signup}>
                    <div className='flex flex-col'>
               <label htmlFor='Username' className='text-lg mb-1'>Username: </label>
                  <input type="text" placeholder='enter username...' className='border px-3 py-2  focus:outline-none focus:ring-1  rounded-lg focus:ring-black' id='Username' onChange={(e)=>setusername(e.target.value)} value={username}/>
                  </div>
                  <div className='flex flex-col'>
               <label htmlFor='Email' className='text-lg mb-1'>Email: </label>
                  <input type="email" placeholder='enter email...' className='border px-3 py-2  focus:outline-none focus:ring-1  rounded-lg focus:ring-black' id='Email' onChange={(e)=>setemail(e.target.value)} value={email}/>
                  </div>
                  <div className='flex flex-col'>
               <label htmlFor='Password' className='text-lg mb-1'>Password: </label>
                  <input type="text" placeholder='enter Password...' className='border px-3 py-2  focus:outline-none focus:ring-1  rounded-lg focus:ring-black' id='Password' onChange={(e)=>setpassword(e.target.value)} value={password}/>
                  </div>
                  <div className='w-[100%] flex justify-center'>
                    <button className='text-[black] bg-[aqua] w-[90%] px-4 py-2 border rounded-sm font-bold text-[20px]  focus:text-[30px]'>Signup</button>
                  </div>
                  <div className='flex justify-center '>
<p>Already have an acount then go to <span className='text-[red] font-bold text-2xl' onClick={()=>navigate("/login")}>Login</span></p>
                  </div>
             </form>
             
          </div>
    </div>
  )
}

export default Signup
