import facebook from '../assets/social_icons/facebook.svg'
import twitter from '../assets/social_icons/twitter.svg'
import instagram from '../assets/social_icons/mdi_instagram.svg'
import linkedin from '../assets/social_icons/ri_linkedin-fill.svg'
import Flare1 from '../assets/purple-flare.png'
import Flare2 from '../assets/purple_flare_2.png'
import purpleStar from '../assets/star_icons/purple_star.svg'
import whiteStar from '../assets/star_icons/white_star.svg'
import greyStar from '../assets/star_icons/grey_star.svg'
import { motion } from 'framer-motion'
import Input from '../components/Inputs/Input'
import { useState } from 'react'

export default function Contact () {

    const [formDetails, setFormDetails] = useState({
        email: '',
        phone_number: '',
        first_name: '',
        message: ''
    })

    const updateForm = (e, name) => {
        setFormDetails(prev => ({...prev, [name]:e.target.value}))
    }

    const clearForm = () => {
        setFormDetails({
            email: '',
            phone_number: '',
            first_name: '',
            message: ''
        })
    }

    console.log(formDetails)

    const contact = () => {
        console.log('contact')
        fetch('https://backend.getlinked.ai/hackathon/contact-form', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": formDetails.email,
                "phone_number": formDetails.phone,
                "first_name": formDetails.first_name,
                "message": formDetails.message
            })
        })
            .then((response) => response.json())
            .then(data => (console.log(data), clearForm() ))

            .catch((err) => console.log(err))
    }

    return (
        <motion.div
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className="flex bg-contain overflow-x-clip bg-no-repeat bg-left" style={{backgroundImage: `url(${Flare1})`, backgroundPositionX: '-10em', backgroundPositionY: '-3em'}}>
                <img src={Flare1} className='fixed -bottom-[13em] -z-[1] opacity-[0.6] -right-[23em] w-[50em]' />
                <div className='flex flex-col md:flex-row gap-10 md:gap-0 w-full px-[2em] md:px-[5em] lg:px-[10em] pt-[2em] md:pt-[6em] pb-[2em] md:items-center'>
                    <div className='text-left flex-[1] relative'>
                        <img src={purpleStar} className='absolute right-40 md:right-auto -top-10 md:-top-24 scale-[0.5] md:scale-[0.7]' />
                        <h2 className='text-[1.5em] tracking-wider font-[clash] pb-3 text-[#D434FE]'>Get in touch</h2>

                        <p className='text-[0.85em] pb-5'>Contact <br />information</p>
                        <p className='text-[0.85em] pb-5'>27,Alara Street <br />
                            Yaba 100012 <br />
                            Lagos State</p>

                        <p className='text-[0.85em] pb-5'>Call Us : 07067981819</p>

                        <p className='text-[0.85em] pb-5 w-[20em]'>we are open from Monday-Friday
                            08:00am - 05:00pm</p>

                        <p className='text-[#D434FE] text-[0.85em] pb-1'>Share on</p>
                        <div className="flex gap-3 ">
                            <img src={instagram} />
                            <img src={twitter} />
                            <img src={facebook} />
                            <img src={linkedin} />
                        </div>
                    </div>
                    <div className=' flex-[1] flex flex-col items-center p-0 md:p-8 lg:p-14 md:bg-[#D9D9D9] relative md:bg-opacity-[0.03] rounded-md'>
                        <div className='w-full'>
                            {/* Stars */}
                            <img src={purpleStar} className='absolute -left-4 bottom-0 md:bottom-20 scale-[0.5] md:scale-[0.7] ' />
                            <img src={whiteStar} className='absolute -bottom-6 -right-16 scale-[0.7]' />
                            <img src={greyStar} className='absolute right-5 -top-20 scale-[0.7]' />
                            {/* Stars */}

                            <p className='text-[#D434FE] font-[clash] tracking-wider font-bold w-[18em] text-left pb-4 text-[1em]'>Questions or need assistance? Let us know about it!</p>

                            <div className='gap-6 flex flex-col'>
                                <Input 
                                    placeholder='First Name'
                                    value={formDetails.first_name}
                                    onChange={(e) => updateForm(e, 'first_name')}
                                />
                                <Input 
                                    type='email' 
                                    placeholder='Mail' 
                                    value={formDetails.email} 
                                    onChange={(e) => updateForm(e, 'email')}
                                />
                                <Input 
                                    type='number' 
                                    value={formDetails.phone_number} 
                                    onChange={(e) => updateForm(e, 'phone_number')}
                                    placeholder='number'
                                />
                                <Input 
                                    type='textarea' 
                                    classname='h-[7em] p-0' 
                                    placeholder='Message' 
                                    value={formDetails.message} 
                                    onChange={(e) => updateForm(e, 'message')}
                                />
                            </div>
                        </div>

                        <button onClick={contact} className='px-[3em]  py-[0.5em] mt-6 bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Submit</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}