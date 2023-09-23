import image from '../../assets/rules img.png'
import Flare1 from '../../assets/purple-flare.png'

export default function RulesGuidelines() {
    return (
        <div className="flex flex-col-reverse md:flex-row px-[2em] md:px-[3em] lg:px-[5em] pb-[2em] md:pb-auto pt-[1em] overflow-x-clip">
            <div className="flex-1 flex relative bg-contain bg-[23em] md:bg-[0em]  bg-no-repeat " style={{backgroundImage: `url(${Flare1})`}}>
                <div className='my-auto text-center md:text-left'>
                    <h1 className='text-[1.4em] font-[clash] md:text-[1.7em] tracking-wide font-black'>Rules and <br /> <span className='font-[clash] tracking-wide text-[#D434FE]'>Guidelines</span></h1>
                    <p className='text-[0.85em] leading-7 pt-4'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>
                </div>
            </div>
            <div className='flex-1 relative ' >
                <img src={image} className='w-[35em]' />
                <img src={Flare1} className=' absolute opacity-80 -bottom-[10em] left-[20em] '/>
            </div>
        </div>
    )
}