import React from 'react'
import Nav from '../components/Nav'
import Posts from '../components/posts'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-[#000000b4]'>
           <Nav/>
           <Posts/>
    </div>
  )
}

export default Home