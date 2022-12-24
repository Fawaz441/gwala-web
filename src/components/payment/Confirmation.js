import React from "react"
import { ReactComponent as Confetti } from "../../assets/images/confetti.svg"
import Container from "../general/Container"

const Confirmation = () => {
    return (
        <Container>
            <div className="py-5">
                <div className="mt-[70px] flex items-center justify-center">
                    <Confetti />
                </div>
                <div className="flex flex-col items-center justify-center mt-[3px]">
                    <h3 className="font-sans400 text-black text-center leading-[31.54px] text-[26px] mt-[15px]">Contribution Successful</h3>
                    <p className="text-[18px] font-sans400 leading-[21.83px] text-center max-w-[288px] text-black">Your contribution has been sent to [group name information]</p>
                </div>
                <div className="mt-[127px] flex flex-col items-center justify-center px-5">
                    <p className="font-sans400 text-black text-[18px] leading-[21.83px] mb-[22px]">Join a group, save together</p>
                    <button
                        className="mb-[37px] border-[1px] border-black rounded-[30px] text-black flex items-center justify-center font-sans400 text-[22px] h-[62px] w-[322px]">
                        Download App
                    </button>
                    <p className="text-[15px] leading-[18.2px] text-center text-black font-sans400">Powered by ourgwala.com</p>
                </div>
            </div>
        </Container>
    )
}

export default Confirmation