import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
export let authdata = createContext();
const Authapi = ({children}) => {
          let server = "http://localhost:3000"
          let [curadmin,setcuradmin] = useState("");
          let [usersaccounts,setusersaccounts] = useState([]);
          let [companyaccounts,setcompanyaccounts] = useState([]);
          const handlecuradmin=async()=>{
       try{
        let result = await axios.get(`${server}/users/curadmin`,{
              withCredentials:true
       })
       console.log(result.data)
       setcuradmin(result.data)
       }catch(err){
              console.log("err in curuser",err)
       }
       
    }
    const handlecompanyaccounts=async()=>{
       try{
        let result = await axios.get(`${server}/users/companiesaccounts`,{
              withCredentials:true
       })
       console.log(result.data)
       setcompanyaccounts(result.data)
       }catch(err){
              console.log("err in curuser",err)
       }
       
    }
    const handleusersaccounts=async()=>{
       try{
        let result = await axios.get(`${server}/users/usersaccounts`,{
              withCredentials:true
       })
       console.log(result.data)
       setusersaccounts(result.data)
       }catch(err){
              console.log("err in curuser",err)
       }
       
    }
    useEffect(()=>{
          handlecuradmin();
          handlecompanyaccounts()
          handleusersaccounts()
    },[])
          let value = {
             server,
             handlecuradmin,
             curadmin, 
             usersaccounts,
             companyaccounts      
          }
  return (
    <div>
        <authdata.Provider value={value}>
          {children}
        </authdata.Provider>  
    </div>
  )
}

export default Authapi