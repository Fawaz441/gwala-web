import React, { useContext } from 'react'
import logo from '../../assets/icons/logo.png'
import { formatAmount } from '../../utils/functions'


export const RequestDeclined = () => {
    return (
        <div className='h-screen flex flex-col space-y-5 justify-center items-center'>
            <img src={logo} alt="Gwala logo" className='h-[300px]' />
            <p className='text-primary font-bold text-xl text-center'>Request Declined.</p>
        </div>
    )
}

export const RequestPaidSuccessfully = () => {
    const { request } = useContext()
    return (
        <div className='h-screen flex flex-col space-y-5 justify-center items-center'>
            <img src={logo} alt="Gwala logo" className='h-[300px]' />
            <p className='text-primary font-bold text-xl text-center'>
                You have successfully paid {formatAmount(request?.amount)} to the `{request?.group?.name}` group.
            </p>
        </div>
    )
}