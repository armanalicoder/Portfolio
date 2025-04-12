import React from 'react'
import Navbar from './LandingPage/Navbar'
import About from './LandingPage/about/About'
import Home from './LandingPage/home/Home'
import Services from './LandingPage/services/Services'
import Skills from './LandingPage/skills/Skills'
import Project from './LandingPage/project/Project'
import Contact from './LandingPage/contact/Contact'
import Footer from './LandingPage/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 mt-20">
      
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>  
    </div>
    </>
  )
}

export default App
