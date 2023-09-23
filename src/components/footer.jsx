import Flare1 from '../assets/purple-flare.png'
import facebook from '../assets/social_icons/facebook.svg'
import twitter from '../assets/social_icons/twitter.svg'
import instagram from '../assets/social_icons/mdi_instagram.svg'
import linkedin from '../assets/social_icons/ri_linkedin-fill.svg'

export default function Footer() {
    return (
        <footer className=" text-center relative py-10 px-[2em] md:px-[5em] lg:px-[7em] overflow-hidden flex flex-col bg-[#100B20] ">
            <img src={Flare1} className='absolute w-[50em] -top-[30em] -left-20 opacity-[0.7] overflow-hidden z-[1]' />
            <div className="flex flex-col md:flex-row gap-9 md:gap-5 text-left z-[2] ">
                <div className="flex-[2] flex flex-col">
                    <h2 className="text-[1.6em] font-black">get<span className="text-[#D434FE]">linked</span></h2>
                    <p className="w-[75%] leading-6 text-[0.8em] pt-[0.8em]">Getlinked Tech Hackathon is a technology innovation program 
                        established by a group of organizations with the aim of showcasing 
                        young and talented individuals in the field of technology</p>
                    
                    <p className="mt-auto font-black text-[0.8em]">Terms of Use <span className="text-[#D434FE] font-black mx-1">|</span> Privacy Policy</p>
                </div>
                <div className="flex-[1]">
                    <p className="text-[0.9em] text-[#D434FE] font-black">Useful Links</p>
                    <div className="pt-[0.8em]">
                        <p className="pb-3 text-[0.8em]">Overview</p>
                        <p className="pb-3 text-[0.8em]">Timeline</p>
                        <p className="pb-3 text-[0.8em]">FAQs</p>
                        <p className="pb-3 text-[0.8em]">Register</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className="text-[#D434FE] font-black text-[0.9em]">Follow us </p>
                        <div className="flex items-center gap-3 ">
                            <img src={instagram} />
                            <img src={twitter} />
                            <img src={facebook} />
                            <img src={linkedin} />
                        </div>
                    </div>
                </div>
                <div className="flex-[1]">
                    <p className="text-[0.9em] text-[#D434FE] font-black">Contact Us</p>
                    <div className="pt-[0.8em] text-[0.8em]">
                        <p className="pb-3"><span>ic</span> +234 8141 2476 08</p>
                        <p className="pb-3"><span>ic</span> +234 8141 2476 08</p>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-[0.8em]">All rights reserved. © getlinked Ltd.</p>
        </footer>
    )
}