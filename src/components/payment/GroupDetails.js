import React, { useContext, useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ReactComponent as QuestionMark } from "../../assets/icons/question-mark.svg"
import { RequestContext } from "../../contexts"
import { formatAmount, getTransactionRef } from "../../utils/functions"
import Container from "../general/Container"
import dog from '../../assets/images/dog.png'
import RequiresRequest from "../general/RequiresRequest"
import routes from "../../constants/routing"
import { FLUTTERWAVE_PUBLIC_KEY } from "../../utils/constants"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import EmailInput from "./EmailInput"
import PoweredByGwala from "../general/PoweredByGwala"
import moment from "moment/moment"


const GroupDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    const { request, markRequestAsSuccesful } = useContext(RequestContext)
    const [email, setEmail] = useState("")
    const [showEmailInput, setShowEmailInput] = useState(false)

    const config = useMemo(() => ({
        public_key: FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: getTransactionRef(request?.group?.groupId, request?.amount, email),
        amount: request?.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email
        },
        customizations: {
            title: `Pay ${formatAmount(request?.amount)} to group "${request?.group?.name}"`,
            description: `Pay ${formatAmount(request?.amount)} to group "${request?.group?.name}"`,
            logo: 'https://www.ourgwala.com/favicon-32x32.png',
        },
    }), [email, request]);

    const proceed = email => {
        setShowEmailInput(false)
        setEmail(email)
    }

    const handleFlutterPayment = useFlutterwave(config);


    useEffect(() => {
        if (email) {
            handleFlutterPayment({
                callback: (response) => {
                    closePaymentModal()
                    markRequestAsSuccesful()
                    navigate(`/payment-requests/${params.paymentRequestInfo}/confirmation`)
                },
                onClose: () => {
                    window.location.reload()
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])

    const requestDate = moment(request.request_date).format("DD.MM.YYYY")

    return (
        <RequiresRequest>
            <Container>
                <div className='bg-white rounded-[30px] w-small mx-auto animate__animated animate__fadeIn'>
                    <div className="p-5">
                        <div className="justify-between flex items-center mb-[39px]">
                            <button
                                onClick={() => navigate(`/payment-requests/${params.paymentRequestInfo}/details`)}
                                className="flex items-center justify-center ml-auto h-[30px] w-[30px] rounded-[10px] border-[2px] border-primary">
                                <QuestionMark />
                            </button>
                        </div>
                        <div className="h-[70px] w-[70px] rounded-[30px] bg-yellow flex items-center justify-center mb-[22px]">
                            <img src={dog} alt="Smiling Dog" className="h-[50px]" />
                        </div>
                        <div className="mb-[27px]">
                            <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">{request?.group?.name}</h3>
                            <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Group created by {request?.group?.ownerName}</p>
                        </div>
                        <div className="mb-[29px]">
                            <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Amount to pay</p>
                            <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">{formatAmount(request?.amount)}</h3>
                        </div>
                        <div className="mb-[42px]">
                            <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Request Date</p>
                            <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">{requestDate}</h3>
                        </div>
                        <p className="text-sm text-black leading-[16.98px] font-sans400">Hello, {request?.requester} requested {formatAmount(request?.amount)} from you</p>
                        <div className="mt-[60px] flex flex-col items-center justify-center">
                            <button
                                onClick={() => setShowEmailInput(true)}
                                className="mb-[13px] rounded-[30px] text-white flex items-center justify-center bg-primary font-sans400 text-[22px] h-[62px] w-[322px]">
                                Proceed to Pay
                            </button>
                            <button
                                onClick={() => navigate(routes.REJECT_REQUEST)}
                                className="mb-[27px] text-black text-center font-sans800 text-[18px]">Reject request</button>
                            <PoweredByGwala />
                        </div>
                    </div>
                </div>
                {showEmailInput &&
                    <EmailInput proceed={proceed}
                        hide={() => setShowEmailInput(false)}
                    />
                }
            </Container>
        </RequiresRequest>
    )
}

export default GroupDetails