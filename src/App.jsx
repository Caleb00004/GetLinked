import { useState } from 'react'
import {NavLink, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Register'
import openIcon from './assets/open_nav.svg'
import closeIcon from './assets/close_nav.svg'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  const openNav = () => {
    setNavOpen(true)
  }

  const closeNav = () => {
    setNavOpen(false)
  }

  return (
    <>
      {/* phone nav dropdown */}
      <div className={`flex md:hidden flex-col h-[100vh] bg-[#150E28] fixed w-full z-[13] transition duration-[0.8s] p-10 ${!navOpen ? "-translate-y-full" : "translate-y-0"} `}>
          <img src={closeIcon} onClick={closeNav} className='w-[1.4em] ml-auto' />
          <ul className='flex flex-col pt-6'>
              <NavLink to='/' onClick={closeNav} className={'text-[0.85em] pb-4'}>TImeline</NavLink>
              <NavLink to='#' onClick={closeNav} className={'text-[0.85em] pb-4'}>Overview</NavLink>
              <NavLink to='#' onClick={closeNav} className={'text-[0.85em] pb-4'}>FAQs</NavLink>
              <NavLink to='/contact' onClick={closeNav} className={'text-[0.85em] pb-4'}>Contact</NavLink>
          </ul>
          <Link to={'/register'}><button onClick={closeNav} className='px-[3em] mt-[1em] py-[0.5em] bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Register</button></Link>
      </div>

      {/* desktop */}
      <nav className='flex justify-between px-[1em] md:px-[3em] lg:px-[5em] py-[1.5em] items-center'>
          <h2 className='text-[1.8em] font-[clash] font-black'>get<span className='text-[#D434FE] font-[clash]'>linked</span></h2>

            <div className='items-center hidden md:flex'>
                <ul className='flex md:w-[19em] lg:w-[23em] justify-between mr-[2em] lg:mr-[6em] items-center'>
                    <NavLink to='/' className={'text-[0.85em]'}>TImeline</NavLink>
                    <NavLink to='#' className={'text-[0.85em]'}>Overview</NavLink>
                    <NavLink to='#' className={'text-[0.85em]'}>FAQs</NavLink>
                    <NavLink to='/contact' className={'text-[0.85em]'}>Contact</NavLink>
                </ul>
                <Link to={'/register'}><button className='px-[3em] py-[0.5em] bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Register</button></Link>
            </div>

            {/* Phone Nav */}
            <img src={openIcon} onClick={openNav} className='flex cursor-pointer md:hidden' />

      </nav>
      {/* <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  )
}

export default App
