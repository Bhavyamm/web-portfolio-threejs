import About from 'components/About'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default Home
