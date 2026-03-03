import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectCards from '../components/ProjectCards'
import Achivements from '../components/Achivements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small delay to let the DOM render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <ProjectCards />
      <Achivements />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage