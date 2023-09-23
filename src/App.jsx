import {NavLink, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const location = useLocation()
  const [displayNav, setDisplayNav] = useState(true)

  const hideNav = () => {
    setDisplayNav(false)
  }
  
  const showNav = () => {
    setDisplayNav(true)
  }
  return (
    <>
      <Navbar display={displayNav} />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home showNav={showNav} />} />
          <Route exact path='/contact' element={<Contact hideNav={hideNav} />} />
          <Route path='/register' element={<Register hideNav={hideNav} />}  />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
