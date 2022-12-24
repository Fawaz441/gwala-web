import React from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as QuestionMark } from "../../assets/icons/question-mark.svg"
import routes from "../../constants/routing"
import Container from "../general/Container"

const GroupDetails = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className="p-5">
                <div className="justify-between flex items-center mb-[39px]">
                    <button
                        onClick={() => navigate(routes.GROUP_DESCRIPTION)}
                        className="flex items-center justify-center ml-auto h-[30px] w-[30px] rounded-[10px] border-[2px] border-primary">
                        <QuestionMark />
                    </button>
                </div>
                <div className="h-[70px] w-[70px] rounded-[30px] bg-yellow flex items-center justify-center mb-[22px]">

                </div>
                <div className="mb-[27px]">
                    <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">Group Name</h3>
                    <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Group created by David</p>
                </div>
                <div className="mb-[29px]">
                    <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Amount to pay</p>
                    <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">NGN 50,000.00</h3>
                </div>
                <div className="mb-[42px]">
                    <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Request Date</p>
                    <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">03.10.2022</h3>
                </div>
                <p className="text-sm text-black leading-[16.98px] font-sans400">Hello, requester name requested requested-amount from you</p>
                <div className="mt-[60px] flex flex-col items-center justify-center">
                    <button
                        onClick={() => navigate(routes.CONFIRMATION)}
                        className="mb-[13px] rounded-[30px] text-white flex items-center justify-center bg-primary font-sans400 text-[22px] h-[62px] w-[322px]">
                        Proceed to Pay
                    </button>
                    <button className="mb-[27px] text-black text-center font-sans800 text-[18px]">Reject request</button>
                    <p className="text-[15px] leading-[18.2px] text-center text-black font-sans400">Powered by ourgwala.com</p>
                </div>
            </div>
        </Container>
    )
}

export default GroupDetails