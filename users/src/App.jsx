import {Routes,Route, Navigate} from "react-router-dom"
import './App.css'
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import { useContext } from "react"
import { userdatacontext } from "../context/Usercontext"
import Applied from "../pages/Applied"
import Seeapplyjobs from "../pages/Seeapplyjobs"

function App() {
  let {recuser} = useContext(userdatacontext)
  return(
  <>
    <Routes>
         <Route path="/" element={ recuser ?<Home/>: <Navigate to="/signup"/>}/>
         <Route path="/signup" element={recuser ? <Navigate to="/"/>:<Signup/>}/>
         <Route path="/login" element={recuser ? <Navigate to="/"/>:<Login/>}/>
         <Route path="/Apply" element={<Applied/>}/>
         <Route path="/applied" element={<Seeapplyjobs/>}/>
        </Routes>
    </>
  )
    
  
}

export default App
