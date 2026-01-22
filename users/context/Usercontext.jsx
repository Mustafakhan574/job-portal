import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setapplyposts, setuserdata } from "../redux/userSlice";
export const userdatacontext = createContext();
const Userdata=({children})=>{ 
 let server = "http://localhost:3000"
 let [recuser,setrecuser] = useState("")
 let dispatch = useDispatch()
    const curuser=async()=>{
       try{
        let result = await axios.get(`${server}/users/curuser`,{
              withCredentials:true
       })
       console.log(result.data)
       setrecuser(result.data)
       }catch(err){
              console.log("err in curuser",err)
       }
       
    }
    const handlelogout=async()=>{
           try{
        let result = await axios.get(`${server}/company/companylogout`)
        console.log(result.data)
        setrecuser(null)
           }catch(err){
             console.log(err)
           }
         }    
    const allposts=async()=>{
          try{
        let result = await axios.get(`${server}/posts/allpostsforuser`,{withCredentials:true})
        console.log(result.data);
        dispatch(setuserdata(result.data))
          }catch(err){
             console.log(err)
          }
        }
     const getapplyposts=async()=>{
          try{
        let result = await axios.get(`${server}/posts/getapplyposts`,{withCredentials:true})
        console.log(result.data);
        dispatch(setapplyposts(result.data))
          }catch(err){
             console.log(err)
          }
        }   
    useEffect(()=>{
       curuser();
       allposts();
       getapplyposts()
    },[])
          let value={
           server,curuser,recuser,handlelogout
          }
  return(
         <div>
          <userdatacontext.Provider value={value}>
                    {children}
          </userdatacontext.Provider>
         </div> 
  )
}
export default Userdata