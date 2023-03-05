import React from 'react'
import { Outlet } from "react-router-dom"

const Payment = () => {
    return (
        <div className='w-full min-h-screen bg-grey'>
            <Outlet />
        </div>
    )
}

export default Payment