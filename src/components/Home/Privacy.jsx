import mainImg from '../../assets/privacyImg.png'
import padlock from '../../assets/shieldPadlock.svg'
import Flare1 from '../../assets/purple-flare.png'
import whiteStar from '../../assets/star_icons/white_star.svg'
import greyStar from '../../assets/star_icons/grey_star.svg'
import purpleStar from '../../assets/star_icons/purple_star.svg'
import check from '../../assets/list_item.svg'

export default function Privacy() {
    return (
        <div className='flex pt-[1em] md:pt-[2em] lg:pt-[5em]'>
            <div className='flex flex-col md:flex-row items-center px-[1.5em] md:px-[4.5em] lg:px-[8em] relative overflow-x-clip py-[4em]'>
                <img src={Flare1} className='absolute -left-20 opacity-[0.7] w-[50em] -bottom-[20em] -z-[1]' />
                <div className='flex-1 relative'>

                    {/* Stars */}
                    <img src={purpleStar} className='absolute top-[6em] right-0 scale-[0.6]' />
                    <img src={purpleStar} className='absolute top-[80%] -left-16 scale-[0.7] ' />
                    <img src={greyStar} className='absolute left-[16em] -top-3 scale-[0.7] ' />

                    <h2 className='text-[1.4em] md:text-[1.6em] font-black text-center md:text-left font-[clash] tracking-wide'>Privacy Policy and <br /><span className='text-[#D434FE] font-[clash] tracking-wide'>Terms</span></h2>
                    <p className='text-[0.8em] py-5 text-center md:text-left'>Last updated on September 12, 2023</p>

                    <p className='text-[0.8em] w-[100%] lg:w-[70%] pb-7 text-center'>
                        Below are our privacy & policy, which outline a lot of goodies. 
                        it’s our aim to always take of our participant
                    </p>

                    <div className='border-2 border-[#D434FE] bg-[#D9D9D9] text-[0.8em] bg-opacity-[0.03] p-6 md:p-5 lg:p-12 rounded-md'>
                        <p className=' leading-6'>At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent 
                            to the practices described in this policy.</p>

                        <p className='text-[#D434FE] pt-[2em] pb-[0.5em]'>Licensing Policy</p>
                        <p className=' font-semibold'>Here are terms of our Standard License:</p>

                        <div className='flex flex-col items-center gap-3'>
                            <div className='flex gap-3 pt-4'>
                                <p className='mt-2'><img src={check} /></p>
                                <p className='leading-6'>The Standard License grants you a non-exclusive right to
                                navigate and register for our event</p>
                            </div>
                            <div className='flex gap-3'>
                                <p className='mt-2'><img src={check} /></p>
                                <p className='leading-6'>You are licensed to use the item available at any free source
                                    sites, for your project developement</p>
                            </div>

                            <button className='px-[3em] py-[0.5em] bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className='flex-[1.3] relative  '>

                    {/* stars */}
                    <img src={whiteStar} className='absolute right-[23%] top-14 scale-[0.4]' />
                    <img src={greyStar} className='absolute right-0 bottom-28 scale-[0.6]' />
                    <img src={whiteStar} className='absolute left-[30%] bottom-48 scale-[0.5]' />
             
                    <div className='mt-16 md:mt-0'>
                        <img src={mainImg} className='w-[30em] h-full mx-auto ' />
                        <img src={padlock} className='absolute left-[8%] md:left-[20%] -top-[0em] md:-top-[9em] -z-[1] scale-[0.7]' />
                    </div>
                </div>
            </div>
        </div>
    )
}