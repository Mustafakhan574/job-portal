import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Companies from './pages/Companies'
import Users from './pages/Users'
import Login from './pages/Login'
import { useContext } from 'react'
import { authdata } from '../Context/authapi'
function App() {
  let {curadmin} = useContext(authdata)
  return (
    <Routes>
      <Route path='/' element={curadmin ? <Home/>:<Navigate to="/login"/>}/>
      <Route path='/login' element={curadmin ? <Navigate to="/"/>: <Login/>}/>
      <Route path='/companies' element={<Companies/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
  )
}

export default App
