import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import groupsAPI from '../../api/groups'
import { RequestContext } from '../../contexts'
import { extractRequestDetails } from '../../utils/functions'

const RequestProvider = ({ children }) => {
    const [request, setRequest] = useState({})
    const [loadingRequest, setLoadingRequest] = useState(true)

    const getGroupDetails = async (groupId, amount, requester) => {
        const { data } = await groupsAPI.getGroupDetails(groupId)
        if (!data?.data) {
            toast.error("Invalid request")
            return
        }
        setRequest({ group: data?.data, amount, requester })
        setLoadingRequest(false)
    }

    const loadRequest = async (paymentRequestInfo) => {
        try {
            const data = extractRequestDetails(paymentRequestInfo)
            if (!data) {
                toast.error("There was an error fetching the request details. Please refresh the page or request for another link.")
            }
            else {
                getGroupDetails(data.group, data.amount, data.requester)
            }
        }
        catch (e) {
            setLoadingRequest(false)
            toast.error("There was an error fetching the request details. Please refresh the page or request for another link.")
        }
    }

    const clearRequest = () => setRequest({})

    return (
        <RequestContext.Provider value={{ clearRequest, request, loading: loadingRequest, loadRequest }}>
            {children}
        </RequestContext.Provider>
    )
}

export default RequestProvider