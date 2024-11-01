import About from 'components/sections/About'
import Contact from 'components/sections/Contact'
import Hero from 'components/sections/Hero'
import Navbar from 'components/sections/Navbar'
import Projects from 'components/sections/Projects'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
