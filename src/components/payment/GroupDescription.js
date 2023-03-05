import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ReactComponent as GroupCreator } from "../../assets/images/group-creator.svg"
import { ReactComponent as BackArrow } from "../../assets/icons/back-arrow.svg"
import Container from "../general/Container"
import { RequestContext } from "../../contexts"
import RequiresRequest from "../general/RequiresRequest"
import PoweredByGwala from "../general/PoweredByGwala"

const GroupDescription = () => {
    const navigate = useNavigate()
    const { request } = useContext(RequestContext)
    const params = useParams()

    return (
        <RequiresRequest>
            <Container>
                <div className='bg-white rounded-[30px] w-small mx-auto'>
                    <div className="py-5 pt-[30px]">
                        <div className="px-5">
                            <div className="justify-between flex items-center mb-[45px]">
                                <button onClick={() => navigate(-1)}>
                                    <BackArrow />
                                </button>
                                <h4 className="text-black text-[22px] font-sans400 leading-[26.69px]">Group Details</h4>
                                <button className="pointer-events-none opacity-0">
                                    <BackArrow />
                                </button>
                            </div>
                            <p className="font-sans400 text-[18px] text-black leading-[21.83px]">
                                {request?.group?.description}
                            </p>
                        </div>
                        <div className="mt-[42px] h-[1px] bg-border/[0.36]" />
                        <div className="pt-7 flex items-center space-x-[15px] px-5">
                            <GroupCreator />
                            <p className="max-w-[216px] text-[18px] font-sans400 text-black leading-[21.83px]">Group created by {request?.group?.ownerName}</p>
                        </div>
                        <div className="mt-[170px] flex flex-col items-center justify-center px-5">
                            <button
                                onClick={() => navigate(`/payment-requests/${params.paymentRequestInfo}/flag-request`)}
                                className="mb-[13px] rounded-[30px] text-white flex items-center justify-center bg-danger font-sans400 text-[22px] h-[62px] w-[322px]">
                                Flag this request
                            </button>
                            <button className="mb-[27px] rounded-[30px] text-black text-center font-sans400 text-[22px] border-[1px] border-black h-[62px] w-[322px]">Download App</button>
                            <PoweredByGwala />
                        </div>
                    </div>
                </div>
            </Container>
        </RequiresRequest>
    )
}

export default GroupDescription