import React from 'react'
import { Outlet } from "react-router-dom"

const Payment = () => {
    return (
        <div className='w-full min-h-screen bg-grey py-10'>
            <Outlet />
        </div>
    )
}

export default Payment