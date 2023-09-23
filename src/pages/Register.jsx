import { useState } from 'react';
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

export default function Register () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    return (
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

            <div className="flex  w-full pt-0 md:pt-5 pb-2 md:px-[1em] lg:px-[5em] flex-col md:flex-row">
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

                    <h3 className="text-[1.7em] font-black text-[#D434FE]">Register</h3>

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
                        />
                        <Input 
                            type="text"
                            placeholder="Enter the name of your group"
                            label="Team's Name"
                            labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                        />
                        <Input 
                            type="text"
                            placeholder="Enter the name of your group"
                            label="Team's Name"
                            labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                        />
                        <Input 
                            type="text"
                            placeholder="Enter the name of your group"
                            label="Team's Name"
                            labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                        />
                    </div>
                    <div className='flex w-[100%] gap-5 pt-5 '>
                        <Input 
                            containerClassName={'w-[49.5%]'}
                            type="text"
                            placeholder="Enter the name of your group"
                            label="Team's Name"
                            labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                        />
                        <Input 
                            containerClassName={'w-[45%]'}
                            type="text"
                            placeholder="Enter the name of your group"
                            label="Team's Name"
                            labelClassName={'text-[0.8em] text-white pb-2 font-black'}
                        />
                    </div>

                    <p className=" italic text-[#FF26B9] text-[0.85em] py-5">Please review your registration details before submitting</p>

                    <div className="flex gap-2 items-center">
                        <input type="checkbox" className="" />
                        <p className="text-[0.85em]">I agreed with the event terms and conditions and privacy policy</p>
                    </div>

                    <button onClick={openModal} className='px-[3em] py-[0.5em] mt-6 bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Register Now</button>
                </div>
            </div>
        </div>
    )
}

// more space inbtw header Texts
// break earlier for div's


// footer pics bigger and texts
// get svg icons 

// add link to seb website in footer

// add underline Animation for navbar items

// video should not be responsive i.e fixed sized on bigger screens should be ReadableByteStreamController
// video should be a bit smaller

// check section above telegram bg image covers container

// add more  padding left and right for last section.

// fix border radius for horizontal scrool bar
// more space btw arrow and the containerClassName

// reduce underline for twitter header section on smaller screens

// navbar should ve a container in the middle.Animation

// picture too strecthed on smaller screens on first section.