import {Routes,Route, Navigate} from "react-router-dom"
import './App.css'
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import { useContext } from "react"
import { userdatacontext } from "../context/Usercontext"
import Application from "../pages/Application"
import Uploadjob from "../pages/Uploadjob"
import Responses from "../pages/Responses"

function App() {
  let {reccompany} = useContext(userdatacontext)
  return(
  <>
        <Routes>
         <Route path="/" element={ reccompany ?<Home/>: <Navigate to="/signup"/>}/>
         <Route path="/signup" element={reccompany ? <Navigate to="/"/>:<Signup/>}/>
         <Route path="/login" element={reccompany ? <Navigate to="/"/>:<Login/>}/>
         <Route path="/application" element={<Application/>}/>
         <Route path="/uploadjob" element={<Uploadjob/>}/>
         <Route path="/responses" element={<Responses/>}/>
        </Routes>
    </>
  )
    
  
}

export default App
