import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-[#540505] text-white'>
          <Nav/>
          <div className='flex flex-col gap-40'>
          <p className=' text-center text-[aqua] text-6xl  pt-4 px-4'>Welcome to Admin Panel
            </p>
             <p className=' text-center text-[white] text-6xl  pt-4 px-4'>Here you can handle users and companies account
            </p>
           </div>
          </div>
  )
}

export default Home