import React, { useEffect, useState } from 'react'
import Logo from '@/assets/images/logo.png'
import { useLocalStorage } from 'usehooks-ts'

export default function WelcomePopup() {
    const [isFirstTime, setIsFirstTime] = useLocalStorage("isFirstTime", null)
    const [confirmGame, setConfirmGame] = useState<string | null>(isFirstTime)


    const handleEnterHome = () => {
        localStorage.setItem("isFirstTime", "true")
        setConfirmGame("true")
    }

    return (
        <>
            {!confirmGame && <div className='bg-modal-welcome fixed h-screen top-0  w-screen flex justify-center items-center flex-col p-5 z-[1100]'>
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
                    <button onClick={handleEnterHome} className='btndefault w-full bnt-text-1 my-10'>
                        Let's Go!
                    </button>
                </div>
            </div>}
        </>

    )
}
