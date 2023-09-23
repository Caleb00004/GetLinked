import CupImg from '../../assets/cupImg.png'
import Rewards from '../../assets/Rewards.png'
import Flare1 from '../../assets/purple-flare.png'
import halfFlare from '../../assets/half_flare.png'

export default function Prize() {
    return (
        <div className="flex flex-col md:flex-row pt-[3em] ">
            {/* For MobileView */}
            <div className='mx-auto mb-[5em] flex flex-col md:hidden text-center'>
                <h3 className='text-[1.4em] font-black'>Prizes and <br /> <span className='text-[#D434FE]'>Rewards</span></h3>
                <p className='w-[90%] mx-auto text-[0.85em]'>Highlight of the prizes or rewards for winners and participants.</p>
            </div>
            {/* For MobileView */}

            <div className={`flex-[1] mb-10 md:mb-0 flex bg-contain bg-center bg-no-repeat bg-[url(${Flare1})]`} style={{backgroundImage: `url(${Flare1})`, backgroundPositionX:'0em', backgroundPositionY: '0em'}} >
                <div className='pl-[3em] my-auto'>
                    <img src={CupImg} />
                </div>
            </div>
            <div className='flex-[1.5] pl-[3em] bg-right bg-no-repeat bg-contain pb-[8em] ' style={{backgroundImage: `url(${halfFlare})`, backgroundPositionY: '6em'}}>
                <div className='ml-[8em] mb-[5em] hidden md:flex flex-col'>
                    <h3 className='text-[1.6em] font-black'>Prizes and <br /> <span className='text-[#D434FE]'>Rewards</span></h3>
                    <p className='w-[50%] text-[0.85em]'>Highlight of the prizes or rewards for winners and participants.</p>
                </div>
                <img src={Rewards} className='w-[75%]' />
            </div>
        </div>
    )
}