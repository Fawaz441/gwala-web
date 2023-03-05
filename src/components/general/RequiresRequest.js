import React, { useContext, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { RequestContext } from '../../contexts'


const RequiresRequest = ({ children }) => {

    const params = useParams()
    const navigate = useNavigate()
    const { loadRequest, loading } = useContext(RequestContext)

    useEffect(() => {
        if (params?.paymentRequestInfo) {
            loadRequest(params.paymentRequestInfo)
        }
        else {
            toast.error("Invalid link")
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
    return <div className="py-10">{children}</div>
}

export default RequiresRequest