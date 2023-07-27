import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between items-center p-5'>
            <Link href={'/'}>
            <img className=' rounded-full' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mascot-logo-game-template-design-f77b3700489c1cbe1488181ededa92e4_screen.jpg?ts=1630305463' width={30} height={30} alt='logo' />
            </Link>
            <Link href={'/wallet'}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png' width={30} height={30} alt='logo' />
            </Link>
        </div>
    )
}
