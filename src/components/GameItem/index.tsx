import Link from 'next/link'
import React from 'react'
import NoImage from '@/assets/images/NoImage.png'

interface Props{
    gameInfo: any
}
export default function GameItem({gameInfo}:Props) {

    return (
        <div className='flex-none mr-5 w-28'>
            <Link href={`/play/${gameInfo.casinoId}-${gameInfo.id}`} >
                <img className='md:h-48 h-28 rounded-xl cursor-pointer object-cover	'
                    src={gameInfo.thumbnail}
                    id={gameInfo.name}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = NoImage.src
                    }}
                />
            </Link>
        </div>
    )
}
