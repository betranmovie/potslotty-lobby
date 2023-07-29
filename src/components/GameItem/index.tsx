import Link from 'next/link'
import React from 'react'
import NoImage from '@/assets/images/NoImage.png'

interface Props {
    gameInfo: any
}
export default function GameItem({ gameInfo }: Props) {

    return (
        <div className='flex-none mr-5 game-item'>
            <Link href={`/play/${gameInfo.id}`} >
                <img className='md:h-48 h-28 game-item cursor-pointer object-cover	'
                    src={gameInfo.thumbnail}
                    id={gameInfo.name}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = NoImage.src
                    }}
                    loading='lazy'
                />
            </Link>
        </div>
    )
}
