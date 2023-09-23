import image from '../../assets/partnerImg.png'
import Flare1 from '../../assets/purple-flare.png'
import purpleStar from '../../assets/star_icons/purple_star.svg'
import whiteStar from '../../assets/star_icons/white_star.svg'

export default function Partners() {
    return (
        <div className='text-center pb-[4em] relative overflow-x-clip bg-left bg-contain bg-no-repeat' style={{backgroundImage: `url(${Flare1})`, backgroundPositionY: '-4em', backgroundPositionX: '-5em'}}>
            <div className='pt-[4em] pb-[1em]'>
                <h2 className='text-[1.4em] md:text-[1.6em] font-black'>Partners and Sponsors</h2>
                <p className='w-[90%] md:w-[30em] mx-auto text-[0.8em] pt-4 leading-5 md:leading-6'>
                    Getlinked Hackathon 1.0 is honored to have the following major 
                    companies as its partners and sponsors
                </p>
            </div>

            <div className='flex flex-col relative mt-6 md:mt-0'>

                {/* stars */}
                <img src={purpleStar} className='absolute left-[20%] -top-3' />
                <img src={purpleStar} className='absolute left-[53%] top-28 scale-[0.7]' />
                <img src={whiteStar} className='absolute left-[53%] top-[75%] scale-[0.7]' />

                <img src={image} className='w-[85%] mx-auto scale-[1] md:scale-[0.85] ' />
            </div>

            <img src={Flare1} className='absolute opacity-[0.8] -bottom-[14em] -right-[13em] w-[40em] ' />
        </div>
    )
}