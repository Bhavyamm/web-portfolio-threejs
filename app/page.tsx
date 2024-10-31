import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
