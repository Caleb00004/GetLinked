import bigIdea from '../../assets/The big idea.png'
import arrow from '../../assets/introuction_section/arrow.svg'
import starGra from '../../assets/introuction_section/sata gra.svg'
import starPu from '../../assets/introuction_section/star pu.svg'


export default function IntroductionSection() {
    return (
        <div className="flex flex-col md:flex-row px-[1.5em] overflow-hidden md:px-[3em] lg:px-[5em] py-[2em] items-center gap-[5em]">
            <div className='relative'>
                <img src={starGra} className='absolute top-[30%]' />
                <img src={bigIdea} className='scale-[0.9]' />
                <img src={arrow} className=' absolute -right-5 md:-right-10 scale-[0.6] md:scale-[0.8] bottom-2 '/>
            </div>
            <div className='relative text-center md:text-left'>
                <img src={starPu} className='absolute scale-[0.3] md:scale-[1] right-0 top-5 md:top-auto md:right-5' />
                <h2 className='text-[1.4em] md:text-[1.7em] font-[clash] font-black'>Introduction to getlinked</h2>
                <h2 className='text-[1.4em] md:text-[1.7em] font-[clash] font-black text-[#D434FE]'>tech Hackathon 1.0</h2>

                <p className='text-[0.85em] leading-7 pt-4'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>
        </div>
    )
}