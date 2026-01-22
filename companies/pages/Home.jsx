import React from 'react'
import Nav from '../components/Nav'
const Home = () => {
  return (
    <div className='w-full min-h-screen bg-[#000000b4]'>
        <Nav/> 
        
        <div className='flex flex-col gap-40'>
          <p className=' text-center text-[aqua] text-6xl  pt-4 px-4'>Welcome to Job-Portal
            </p>
            <p className='text-center text-[white] text-4xl  pt-4 px-4'>Here you can upload jobs and get employees who is perfect for those roles</p> 
           </div>
        
    </div>
  )
}

export default Home