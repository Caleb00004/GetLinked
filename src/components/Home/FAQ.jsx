import { useState } from "react"
import faqImage from '../../assets/faq_image.png'
import purpleStar from '../../assets/star_icons/purple_star.svg'
import questionmark from '../../assets/_.png'
import whiteStar from '../../assets/star_icons/white_star.svg'
import greyStar from '../../assets/star_icons/grey_star.svg'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function FaqContent({title, content}) {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current);

    return (
    <div
      className={
        'transition-all duration-500 linear rounded-md '
      }
    >
      <div
        className= " w-full text-left items-center pt-4 pb-2 select-none flex justify-between flex-row "
        // tabIndex={-1}
        // onClick={toggleExpanded}
        type="button"
      >
        <h5 className="flex-1 font-bold font-inter">{title}</h5>
        <div className="flex-none pl-2" onClick={toggleExpanded}>
          {expanded ? (
            <p className="text-[#D434FE] hover:cursor-pointer scale-[1.5] font-black">-</p>
          ) : (
            <p className="text-[#D434FE] hover:cursor-pointer scale-[1.5] font-black">+</p>
          )}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 linear ${
          expanded ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-left font-light ">{content}</p>
      </div>
    </div>
  );

}

export default function FAQ() {
    return (
        <div className="flex flex-col items-center md:flex-row pl-[2em] md:pl-[3em] lg:pl-[7em] pr-[1em] pt-[4em] md:pt-[10em] pb-[5em] gap-[2em]">
            <div className="flex-1 mr-5 md:mr-10 relative">
                <img src={purpleStar} className="absolute scale-[0.7] md:scale-[1] -top-8 md:-top-14 left-1 md:-left-5" />
                <div className="text-center md:text-left">
                    <h2 className="text-[1.7em] font-black">Frequently Ask <br /><span className="text-[#D434FE]">Question</span></h2>

                    <p className="text-[0.8em] pt-4 pb-8 leading-6 w-[100%] md:w-[70%]">We got answers to the questions that you might want to ask about <span>getlinked Hackathon 1.0</span></p>
                </div>
                <div className="text-[0.75em]">
                    <div className="border-b py-2 pb-2  border-[#D434FE]">
                        <FaqContent
                        title="Does Bonpay facilitate fiat payments for businesses?"
                        content="No, Bonpay exclusively supports Digital assets, including cryptocurrencies and NFTs, as the accepted means of payment. We provide a secure and streamlined platform for handling these digital transactions, ensuring seamless experiences for businesses and their customers in the world of digital assets."
                        />
                    </div>
                    <div className="border-b py-2 pb-2  border-[#D434FE]">
                        <FaqContent
                        title="How can I withdraw my USDC from Bonpay?"
                        content="Bonpay provides two convenient withdrawal options for your USDC funds. You can opt for a direct bank withdrawal, where the funds will be transferred to your bank account. Alternatively, you can choose the cash in option, which allows you to visit a bank in person and receive cash for your USDC. Both methods offer flexibility and ease of access to your funds, ensuring a seamless withdrawal experience."
                        />
                    </div>
                    <div className="border-b py-2 pb-2  border-[#D434FE]">
                        <FaqContent
                        title="Lorem ipsum dolor sit amet consectetur adipisicing."
                        content={lorem}
                        />
                    </div>
                    <div className="border-b py-2 pb-2  border-[#D434FE]">
                        <FaqContent
                            title="Lorem ipsum dolor sit amet consectetur adipisicing."
                            content={lorem}
                        />
                    </div>
                    <div className="border-b py-2 pb-2  border-[#D434FE]">
                        <FaqContent
                            title="Lorem ipsum dolor sit amet consectetur adipisicing."
                            content={lorem}
                        />
                    </div>
                    <div className="border-b py-2 pb-2  border-[#D434FE]">
                        <FaqContent
                            title="Lorem ipsum dolor sit amet consectetur adipisicing."
                            content={lorem}
                        />
                    </div>
                </div>
            </div>
            <div className="flex-[1.1] relative mt-[5em] md:mt-0 ">
                <div className="flex w-[100%] lg:w-[58%] justify-between -left-[13%] lg:left-[6%] -top-[3em] absolute scale-[0.5] lg:scale-[0.8]">
                    <img src={questionmark} />
                    <img src={questionmark} className="relative bottom-8" />
                    <img src={questionmark} />
                </div>

                    {/* Stars */}
                    <img src={purpleStar} className="absolute top-[5em] lg:top-[12em] scale-[0.6] left-[2em] lg:left-[5em]" />
                    <img src={purpleStar} className="absolute top-[0em] left-[43%] scale-[0.6]" />
                    <img src={whiteStar} className="absolute top bottom-0 right-[5em] scale-[0.6]" />

                <img src={faqImage} />
            </div>
        </div>
    )
}