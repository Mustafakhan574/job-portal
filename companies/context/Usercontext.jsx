import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setposts, setresponses } from "../Redux/companySlice";

export const userdatacontext = createContext();
const Userdata=({children})=>{ 
 let server = "http://localhost:3000"
 let [reccompany,setreccompany] = useState("")
 let dispatch = useDispatch()
    const curcompany=async()=>{
       try{
        let result = await axios.get(`${server}/company/curcompany`,{
              withCredentials:true
       })
       console.log(result.data)
       setreccompany(result.data)
       }catch(err){
              console.log("err in curcompany",err)
       }
       
    }
    const allposts=async()=>{
      try{
    let result = await axios.get(`${server}/posts/allposts`,{withCredentials:true})
    console.log(result.data);
    dispatch(setposts(result.data))
      }catch(err){
         console.log(err)
      }
    }
    const getresponses=async()=>{
              try{
         let result = await axios.get(`${server}/posts/getallresponses`,{withCredentials:true})
         console.log(result.data)
         dispatch(setresponses(result.data))
              }catch(err){
                        console.log(err)
              }
           } 
       const handlelogout=async()=>{
           try{
        let result = await axios.get(`${server}/company/companylogout`)
        console.log(result.data)
        setreccompany(null)
           }catch(err){
             console.log(err)
           }
         }    
           
           useEffect(()=>{
              getresponses()
           },[])     
    useEffect(()=>{
       curcompany();
       allposts();
       getresponses()
    },[])
          let value={
           server,curcompany,reccompany,handlelogout
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