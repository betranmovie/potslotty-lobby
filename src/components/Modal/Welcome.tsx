import React, { useEffect, useState } from 'react'
import Logo from '@/assets/images/logo.png'
import { useLocalStorage } from 'usehooks-ts'

export default function WelcomePopup() {
    // const [confirmGame, setConfirmGame] = useState()


    // const handleEnterHome = () => {
    //     localStorage.setItem("isFirstTime", "true")
    // }

    return (
        <div className='bg-modal-welcome sticky top-0 h-screen w-screen flex justify-center items-center flex-col p-5'>
            <div className='welcome-top'></div>
            <div className='welcome-modal flex flex-col justify-center text-center '>
                <img className='my-10' src={Logo.src} alt='glogo' />
                <p className='text-white heading-4'>
                    Welcome to PotSlotty</p>
                <p className='text-body-1 my-2'>#1 Online casino in Telegram where waves are made.
                </p>
                <p className='text-body-1'>
                    To start, you can find our here. By clicking below you confirm you are over 18y.o and accpect legals.
                </p>
                <button className='btndefault w-full bnt-text-1 my-10'>
                    Let's Go!
                </button>
            </div>
        </div>

    )
}
