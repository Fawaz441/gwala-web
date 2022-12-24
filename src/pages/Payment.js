import React from 'react'
import { Outlet } from "react-router-dom"

const Payment = () => {
    return (
        <div className='w-full min-h-screen bg-grey py-10'>
            <div className='bg-white rounded-[30px] w-small mx-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Payment