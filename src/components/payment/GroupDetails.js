/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import groupsAPI from "../../api/groups"
import { ReactComponent as QuestionMark } from "../../assets/icons/question-mark.svg"
import routes from "../../constants/routing"
import { GroupContext } from "../../contexts"
import Container from "../general/Container"

const GroupDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const { group, setGroup } = useContext(GroupContext)

    const getGroupDetails = async (groupId) => {
        try {
            const { data } = await groupsAPI.getGroupDetails(groupId)
            setGroup(data?.data)
            setLoading(false)
        }
        catch (e) {
            alert("There was an error fetching the group details. Please refresh the page to try again")
            setLoading(false)
        }
    }

    useEffect(() => {
        if (params?.groupId) {
            getGroupDetails(params.groupId)
        }
    }, [])
    console.log(group)
    return (
        <Container>
            {loading ?
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div> :
                <div className='bg-white rounded-[30px] w-small mx-auto animate__animated animate__fadeIn'>
                    <div className="p-5">
                        <div className="justify-between flex items-center mb-[39px]">
                            <button
                                onClick={() => navigate(`/groups/${group.groupId}/details`)}
                                className="flex items-center justify-center ml-auto h-[30px] w-[30px] rounded-[10px] border-[2px] border-primary">
                                <QuestionMark />
                            </button>
                        </div>
                        <div className="h-[70px] w-[70px] rounded-[30px] bg-yellow flex items-center justify-center mb-[22px]">

                        </div>
                        <div className="mb-[27px]">
                            <h3 className="text-black font-sans800 text-[24px] leading-[29.11px]">{group?.name}</h3>
                            <p className="font-sans400 text-[18px] text-black leading-[21.83px]">Group created by {group?.ownerName}</p>
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
                </div>
            }
        </Container>
    )
}

export default GroupDetails