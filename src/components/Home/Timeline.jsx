import line from '../../assets/Line 3.png'

export default function Timeline() {

    return (
        <div className='text-center pt-[3em] pb-[4em] '>
            <h2 className='text-[1.6em] font-black pb-3'>Timeline</h2>
            <p className='w-[25em] text-[0.8em] mx-auto'>
                Here is the breakdown of the time we anticipate 
                using for the upcoming event.
            </p>

            {/* Mobile View */}
            <div className=" flex md:hidden flex-col gap-8 mt-[4em] px-[2em] ">
                <div className='flex w-full gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={line} className=' w-[2px] h-18' />
                        <p className='text-white bg-[#D434FE] px-[10px] text-[0.8em] py-[2px] rounded-full font-black'>1</p>
                    </div>
                    <div className='text-left flex flex-col text-[0.8em] justify-between'>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.85em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>

                <div className='flex w-full gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={line} className=' w-[2px] h-18' />
                        <p className='text-white bg-[#D434FE] px-[10px] text-[0.8em] py-[2px] rounded-full font-black'>1</p>
                    </div>
                    <div className='text-left flex flex-col text-[0.8em] justify-between'>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.85em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>

                <div className='flex w-full gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={line} className=' w-[2px] h-18' />
                        <p className='text-white bg-[#D434FE] px-[10px] text-[0.8em] py-[2px] rounded-full font-black'>1</p>
                    </div>
                    <div className='text-left flex flex-col text-[0.8em] justify-between'>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.85em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>

                <div className='flex w-full gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={line} className=' w-[2px] h-18' />
                        <p className='text-white bg-[#D434FE] px-[10px] text-[0.8em] py-[2px] rounded-full font-black'>1</p>
                    </div>
                    <div className='text-left flex flex-col text-[0.8em] justify-between'>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.85em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>

                <div className='flex w-full gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={line} className=' w-[2px] h-18' />
                        <p className='text-white bg-[#D434FE] px-[10px] text-[0.8em] py-[2px] rounded-full font-black'>1</p>
                    </div>
                    <div className='text-left flex flex-col text-[0.8em] justify-between'>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.85em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>

                <div className='flex w-full gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={line} className=' w-[2px] h-18' />
                        <p className='text-white bg-[#D434FE] px-[10px] text-[0.8em] py-[2px] rounded-full font-black'>1</p>
                    </div>
                    <div className='text-left flex flex-col text-[0.8em] justify-between'>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.85em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>
            </div>

            {/* Desktop and Tablet view */}
            <div className=" hidden md:flex flex-col gap-4 mt-[7em] px-[5em] lg:px-[10em] ">
                <div className='flex w-full '>
                    <div className='flex-1 text-right mt-[auto]  '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.8em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className='flex flex-[0.5] flex-col items-center gap-4'>
                        <img src={line} className=' w-[2px] h-28' />
                        <p className='text-white bg-[#D434FE] px-3 py-1 rounded-full font-black'>1</p>
                    </div>
                    <div className='flex-1 mt-auto text-left '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>
                <div className='flex w-full '>
                    <div className='flex-1 mt-auto text-right '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                    <div className='flex flex-[0.5] flex-col items-center gap-4'>
                        <img src={line} className=' w-[2px] h-28' />
                        <p className='text-white bg-[#D434FE] px-3 py-1 rounded-full font-black'>2</p>
                    </div>
                    <div className='flex-1 text-left mt-[auto]  '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.8em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                    </div>
                </div>
                <div className='flex w-full '>
                    <div className='flex-1 text-right mt-[auto]  '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.8em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className='flex flex-[0.5] flex-col items-center gap-4'>
                        <img src={line} className=' w-[2px] h-28' />
                        <p className='text-white bg-[#D434FE] px-3 py-1 rounded-full font-black'>3</p>
                    </div>
                    <div className='flex-1 mt-auto text-left '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>
                <div className='flex w-full '>
                    <div className='flex-1 mt-auto text-right '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                    <div className='flex flex-[0.5] flex-col items-center gap-4'>
                        <img src={line} className=' w-[2px] h-28' />
                        <p className='text-white bg-[#D434FE] px-3 py-1 rounded-full font-black'>2</p>
                    </div>
                    <div className='flex-1 text-left mt-[auto]  '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.8em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                    </div>
                </div>
                <div className='flex w-full '>
                    <div className='flex-1 text-right mt-[auto]  '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.8em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className='flex flex-[0.5] flex-col items-center gap-4'>
                        <img src={line} className=' w-[2px] h-28' />
                        <p className='text-white bg-[#D434FE] px-3 py-1 rounded-full font-black'>3</p>
                    </div>
                    <div className='flex-1 mt-auto text-left '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                </div>
                <div className='flex w-full '>
                    <div className='flex-1 mt-auto text-right '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>November 18, 2023</p>
                    </div>
                    <div className='flex flex-[0.5] flex-col items-center gap-4'>
                        <img src={line} className=' w-[2px] h-28' />
                        <p className='text-white bg-[#D434FE] px-3 py-1 rounded-full font-black'>2</p>
                    </div>
                    <div className='flex-1 text-left mt-[auto]  '>
                        <p className='text-[#D434FE] font-black text-[1.1em]'>Hackathon Announcement</p>
                        <p className=' text-[0.8em] w-full'>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}