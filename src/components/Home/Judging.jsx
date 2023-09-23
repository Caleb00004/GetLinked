import image from '../../assets/judging_img.png'
import ellipse from '../../assets/Ellipse 2.svg'
import Flare1 from '../../assets/purple-flare.png'
import Flare2 from '../../assets/purple_flare_2.png'
import starGra from '../../assets/introuction_section/sata gra.svg'
import whiteStar from '../../assets/star_icons/white_star.svg'
import greyStar from '../../assets/star_icons/grey_star.svg'

export default function Judging() {
    return (
        <div className='flex flex-col md:flex-row pt-[2.5em] md:pt-[5em] pb-[2em]'>
            <div className='flex-[1.2] mt-[2em] relative bg-contain bg-center bg-no-repeat ' style={{backgroundImage: `url(${Flare1})`, backgroundPositionX:'0em', backgroundPositionY: '2em'}}>
                
                <img src={starGra} className='absolute left-[10em] scale-[0.7] md:scale-[1] -top-8'/>
                <img src={greyStar} className='absolute left-[50%] scale-[0.5] md:scale-[1] top-[10em] md:top-[18em]'/>
                <img src={whiteStar} className='absolute left-[85%] scale-[0.5] md:scale-[1] -bottom-[280%] md:bottom-[18%] '/>

                <img src={ellipse} className='absolute scale-[0.8] left-[19%] top-[2%] w-[20%] -z-[1]' />
                <img src={image} className=' scale-[0.8] bg-transparent' />
            </div>
            <div className='flex-1 relative pr-7 pl-7 md:pl-auto md:pr-8 text-center md:text-left'>
                <h2 className='text-[1.4em] md:text-[1.7em] pb-4 md:pb-auto font-black'>Judging Criteria <br /> <span className='text-[#D434FE]'>Key attributes</span></h2>

                <div>
                    <div className='py-1 md:py-2 lg:py-3 text-[0.85em] leading-6'>
                        <p><span className='text-[#FF26B9]'>Innovation and Creativity</span>:  Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features
                        </p>
                    </div>

                    <div className='py-3 text-[0.85em] leading-6'>
                        <p><span className='text-[#FF26B9]'>Innovation and Creativity</span>:  Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features
                        </p>
                    </div>

                    <div className='py-3 text-[0.85em] leading-6'>
                        <p><span className='text-[#FF26B9]'>Innovation and Creativity</span>:  Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features
                        </p>
                    </div>

                    <div className='py-3 text-[0.85em] leading-6'>
                        <p><span className='text-[#FF26B9]'>Innovation and Creativity</span>:  Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features
                        </p>
                    </div>

                    <div className='py-3 text-[0.85em] leading-6'>
                        <p><span className='text-[#FF26B9]'>Innovation and Creativity</span>:  Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features
                        </p>
                    </div>

                    <button className='mt-4 mb-24 px-[3em] py-[0.5em] bg-gradient-to-r from-[#FF3ADA] via-[#D434FE] to-[#FE34B9] border-none rounded-sm'>Register</button>
                </div>

                <img src={Flare2} className='absolute top-[18em] right-0 opacity-[0.5] -z-[2]' />
            </div>
        </div>
    )
}