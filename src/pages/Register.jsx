import { useLayoutEffect, useState } from 'react';
import Input from "../components/Inputs/Input"
import Flare1 from '../assets/purple-flare.png'
import mainImage from '../assets/register_img.png'
import male_emo from '../assets/male_walk_emoji.svg'
import female_emo from '../assets/female_walk_emoji.svg'
import Modal from "../components/Modal"
import congratImg from "../assets/congratulation.svg"
import purpleStar from '../assets/star_icons/purple_star.svg'
import whiteStar from '../assets/star_icons/white_star.svg'
import greyStar from '../assets/star_icons/grey_star.svg'
import wink from "../assets/wink-emoji.svg"
import { motion } from 'framer-motion'

export default function Register ({hideNav}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formDetails, setFormDetails] = useState({
        teamName: '',
        phone: '',
        email: '',
        projectTopic: '',
        category: '',
        groupSize: ''
    })

    useLayoutEffect(() => {
        hideNav()
    },[])

    const clearForm = () => {
        setFormDetails({
            teamName: '',
            phone: '',
            email: '',
            projectTopic: '',
            category: '',
            groupSize: ''
        })        
    }
    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    console.log(formDetails)

    const updateForm = (e, name) => {
        setFormDetails(prev => ({...prev, [name]:e.target.value}))
    }

    const register = () => {
        console.log('register')
        fetch('https://backend.getlinked.ai/hackathon/registration', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": formDetails.email,
                "phone_number": formDetails.phone,
                "team_name": formDetails.teamName,
                "group_size": formDetails.groupSize,
                "category": formDetails.category,
                "project_topic": formDetails.projectTopic
            })
        })
            .then((response) => response.json())
            .then(data => (openModal(), clearForm() ))

            .catch((err) => console.log(err))
    }

    return (
        <motion.div
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className={`flex relative bg-contain bg-no-repeat bg-left bg-[url(${Flare1})] bg-[left -10em] bg-[top -3em]`} style={{backgroundImage: `url(${Flare1})`, backgroundPositionX: '-10em', backgroundPositionY: '-3em'  }} >
                <Modal isOpen={isModalOpen} hideCloseButton onClose={closeModal}>
                    <div className='flex flex-col items-center pt-7 pb-14 px-8 relative'>
                        {/* Stars */}
                        <img src={purpleStar} className='absolute -right-7 -top-7 scale-[0.6]' />
                        <img src={purpleStar} className='absolute right-0 bottom-2 scale-[0.6]' />
                        {/* <img src={purpleStar} className='absolute -right-7 -top-7 scale-[0.6]' /> */}
            
                        <img src={congratImg} />

                        <h3 className='text-[1.3em] font-black'>Congratulations</h3>
                        <h3 className='text-[1.3em] font-black'>you have successfully Registered!</h3>

                        <p className='flex justify-center text-[0.8em] w-[60%] pt-3'>Yes it was easy and you did it!</p> 
                        <p className='flex justify-center text-[0.8em] w-[60%]'> check your mail box for next step <span><img  className='relative left-2' src={wink} /></span></p>

                        <button onClick={closeModal} className='px-[3em] py-[0.5em] w-full mt-6 bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Back</button>

                    </div>
                </Modal>
                <img src={Flare1} className='hidden md:flex md:fixed -bottom-[13em] -z-[1] opacity-[0.6] -right-[23em] w-[50em]' />

                <div className="flex w-full pt-0 md:pt-5 pb-2 md:px-[1em] lg:px-[5em] flex-col md:flex-row">
                    <div className="flex-1 relative hidden md:flex">

                        {/* stars */}
                        <img src={purpleStar} className='absolute left-0 scale-[0.7] top-8' />
                        <img src={purpleStar} className='absolute right-0 scale-[0.7] bottom-[7em]' />
                        <img src={greyStar} className='absolute left-0 bottom-16 scale-[0.7]' />

                        <img src={mainImage} className='h-[90%]' />
                    </div>
                    <div className="flex-[1.1] scale-[0.9] relative md:bg-[#D9D9D9] flex flex-col text-left md:bg-opacity-[0.03] pt-2 md:pt-10 pb-10 px-0 md:px-16">

                        {/* Stars */}
                        <img src={greyStar} className='absolute right-[30%] top-3 scale-[0.8]' />
                        <img src={whiteStar} className='absolute right-[10%] -bottom-5 scale-[0.4]' />

                        <h3 className="text-[1.7em] font-[clash] tracking-wide font-black text-[#D434FE] -mt-8 md:mt-0">Register</h3>

                        {/* For mobile */}
                        <img src={mainImage} className='flex md:hidden' />
                        {/* For mobile */}

                        <p className="flex items-end text-[0.8em] pt-4">Be part of this movement <span className="flex items-center justify-center border-b border-b-[#D434FE] relative bottom-1 left-3 w-[6em]"><img src={female_emo} /> <img src={male_emo} /> </span></p>
                        <h2  className="font-black text-[1.5em] pt-1 pb-7">CREATE YOUR ACCOUNT</h2>

                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Input 
                                type="text"
                                placeholder="Enter the name of your group"
                                label="Team's Name"
                                labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                                onChange={(e) => updateForm(e, 'teamName')}
                                value={formDetails.teamName}
                            />
                            <Input 
                                type="number"
                                placeholder="Enter your phone number"
                                label="Phone"
                                labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                                onChange={(e) => updateForm(e, 'phone')}
                                value={formDetails.phone}
                            />
                            <Input 
                                type="mail"
                                placeholder="Enter your email address"
                                label="Email"
                                labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                                onChange={(e) => updateForm(e, 'email')}
                                value={formDetails.email}
                            />
                            <Input 
                                type="text"
                                placeholder="What is your group project topic"
                                label="Project Topic"
                                labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                                onChange={(e) => updateForm(e, 'projectTopic')}
                                value={formDetails.projectTopic}
                            />
                        </div>
                        <div className='flex w-[100%] gap-5 pt-5 '>
                            <div className='flex flex-col w-full'>
                                <label className='text-[0.8em] text-white pb-2 font-black'>Category</label>
                                <select value={formDetails.category} onChange={(e) => updateForm(e, 'category')} className='border border-white rounded-sm bg-[#9a2da0] bg-opacity-[0.5] text-white text-[0.85em] px-6 py-2'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='text-[0.8em] text-white pb-2 font-black'>Group Size</label>
                                <select value={formDetails.groupSize} onChange={(e) => updateForm(e, 'groupSize')} className='border border-white rounded-sm bg-[#9a2da0] bg-opacity-[0.3] text-white text-[0.85em] px-6 py-2'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </div>

                        <p className=" italic text-[#FF26B9] text-[0.85em] py-5">Please review your registration details before submitting</p>

                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="" />
                            <p className="text-[0.85em]">I agreed with the event terms and conditions and privacy policy</p>
                        </div>

                        <button onClick={register} className='px-[3em] py-[0.5em] mt-6 bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Register Now</button>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}
