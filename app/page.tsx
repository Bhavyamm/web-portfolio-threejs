import About from 'components/sections/About'
import Contact from 'components/sections/Contact'
import Footer from 'components/sections/Footer'
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
      <Footer />
    </div>
  )
}

export default Home
