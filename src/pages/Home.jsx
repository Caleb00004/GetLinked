import chainIconImg from '../assets/chain icon.svg'
import bangIconImg from '../assets/bang icon.svg'
import manGlassesImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1 (1).png" 
import underline from '../assets/underline_purple.svg'
import IntroductionSection from '../components/Home/Introduction'
// import Rule from 'postcss/lib/rule'
import RulesGuidelines from '../components/Home/RulesGuidelines'
import Judging from '../components/Home/Judging'
import FAQ from '../components/Home/FAQ'
import Timeline from '../components/Home/Timeline'
import Prize from '../components/Home/Prize'
import Partners from '../components/Home/Partners'
import Privacy from '../components/Home/Privacy'
import Footer from '../components/footer'
import Internet from '../assets/internet.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'

export default function Home ({showNav}) {

    useLayoutEffect(() => {
        showNav()
    },[])
    
    return (
         <motion.div
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >   
            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />
            <div className='flex items-center flex-col md:flex-row pl-[1em] pr-[1em] md:pr-auto md:pl-[3em] lg:pl-[5em] pt-[2em] overflow-x-clip '>
                <div className='flex-[1.5] flex flex-col text-center md:text-left '>

                    <div className='mb-2 mx-auto items-end flex flex-col md:hidden'>
                        <p className='text-[1.1em] w-[19em] font-black text-right italic'>Igniting a Revolution in HR Innovation</p>
                        <img className='ml-auto w-[8em]' src={underline} />
                    </div>

                    <h1 className='flex font-[clash] w-[100%] items-end justify-center md:justify-start z-[2] text-[2.1em] md:text-[2.8em] lg:text-[3.4em] '>getlinked Tech  </h1>
                    <h1 className='flex font-[clash] w-[100%] items-end justify-center md:justify-start z-[2] text-[2.1em] md:text-[2.8em] lg:text-[3.4em] '>Hackathon <span className='flex pl-4 font-[clash] text-[#D434FE]'>1.0 <img className='w-[1.5em]' src={chainIconImg} /> <img className='w-[1.5em]' src={bangIconImg} /> </span></h1>

                    <p className='w-[100%] md:w-[70%]'>Participate in getlinked tech Hackathon 2023 stand
                    a chance to win a Big prize</p>
                    <button className='mt-6 w-[10.5em] ml-auto mr-auto md:mr-auto md:ml-0 mb-6 px-[3em] py-[0.5em] bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Register</button>

                    <div className='flex justify-between mx-auto md:mx-0 w-[11em] hour '>
                        <p>00<span>H</span></p>
                        <p>00<span>M</span></p>
                        <p>00<span>S</span></p>
                    </div>
                </div>
                <div className='flex-1 relative '>
                    <div className='mb-2 mr-0 lg:mr-10 hidden md:flex flex-col'>
                        <p className='text-[1.2em] lg:text-[1.6em] ml-auto w-[19em] font-black text-right italic'>Igniting a Revolution in HR Innovation</p>
                        <img className='ml-auto w-[11em]' src={underline} />
                    </div>
                    <img src={Internet} className='absolute opacity-[0.7] ' />
                    <img src={manGlassesImg} className='w-[100%] scale-x-[1] md:scale-x-[1.5] right-[7.5em] relative -z-[1] mt-[2.5em] ' />
                </div>
            </div>

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <IntroductionSection />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <RulesGuidelines />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <Judging />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <FAQ />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <Timeline />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <Prize />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <Partners />

            <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' />

            <Privacy />
            
            {/* <hr className=' border-gray-300 border-opacity-10 h-[0.1px]' /> */}

            <Footer />
         </motion.div>
    )
}