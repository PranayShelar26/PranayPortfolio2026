import './App.css'
import { Contact } from './components/Contact'
import { Landingpage } from './components/Landingpage'
import { About } from './components/About'
import { ReactLenis, useLenis } from 'lenis/react'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Navbar } from './components/Navbar'
import Skills from './components/Skills'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <ReactLenis root />
        <Navbar/>
        <Landingpage/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/> 
        </BrowserRouter>

    </>
  )
}

export default App
