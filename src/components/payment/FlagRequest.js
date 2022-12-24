import React from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as BackArrow } from "../../assets/icons/back-arrow.svg"
import { FLAG_REASONS } from "../../constants/payments"
import Container from "../general/Container"
import TextRadioInput from "../inputs/TextRadioInput"

const FlagRequest = () => {
    const navigate = useNavigate()
    const [flagReason, setFlagReason] = React.useState(null)
    return (
        <Container>
            <div className="p-5 pt-[30px]">
                <div>
                    <div className="justify-between flex items-center mb-[45px]">
                        <button onClick={() => navigate(-1)}>
                            <BackArrow />
                        </button>
                        <h4 className="text-black text-[22px] font-sans400 leading-[26.69px]">Flag this Request</h4>
                        <button className="pointer-events-none opacity-0">
                            <BackArrow />
                        </button>
                    </div>
                    <p className="mb-[52px] font-sans400 text-[18px] text-black leading-[21.83px]">
                        Please select reason why you are flagging this request
                    </p>
                </div>
                {FLAG_REASONS.map((reason) => (
                    <TextRadioInput
                        text={reason.text}
                        key={reason.id}
                        checked={reason.id === flagReason}
                        onClick={() => setFlagReason(reason.id)}
                    />
                ))}
                <div className="mt-[125px] flex flex-col items-center justify-center px-5">
                    <button className="mb-[13px] rounded-[30px] text-white flex items-center justify-center bg-danger font-sans400 text-[22px] h-[62px] w-[322px]">
                        Submit
                    </button>
                    <p className="text-[15px] leading-[18.2px] text-center text-black font-sans400">Powered by ourgwala.com</p>
                </div>
            </div>
        </Container>
    )
}

export default FlagRequest