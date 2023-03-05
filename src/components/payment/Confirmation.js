import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ReactComponent as Confetti } from "../../assets/images/confetti.svg"
import { RequestContext } from "../../contexts"
import Container from "../general/Container"
import RequiresRequest from "../general/RequiresRequest"

const Confirmation = () => {
    const { request } = useContext(RequestContext)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        console.log('here....')
        if (!params.paymentRequestInfo) {
            navigate("/")
        }
        if (!request.successful) {
            navigate(`/payment-requests/${params.paymentRequestInfo}/pay`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <RequiresRequest>
            <Container>
                <div className='bg-white rounded-[30px] w-small mx-auto'>
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
                </div>
            </Container>
        </RequiresRequest>
    )
}

export default Confirmation