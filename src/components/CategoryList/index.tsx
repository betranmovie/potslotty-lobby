import React, { useRef } from 'react'
import GameItem from '../GameItem'
import { IGame } from '@/types/games';

interface Props {
    categoryName: string;
    categoryId?: number;
    listGame: any
}

export default function CategoryList({ categoryName, listGame }: Props) {
    const scrollElement: any = useRef(null)

    const scroll = (scrollOffset: number) => {
        scrollElement.current.scrollLeft += scrollOffset;
    };


    return (
        <div className='mx-4 mb-6'>
            <div className='flex'>
                <h1 className=' text-white text-base py-2 uppercase font-semibold lg:text-xl'>{categoryName}</h1>
                <span className=' grow'></span>
                <button onClick={() => scroll(-200)} className='btnprev mr-2'>
                    <svg className="mx-auto lg:h-3 h-3" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 5L6 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
                <button onClick={() => scroll(200)} className='btnprev'>
                    <svg className="mx-auto lg:h-3 h-3" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 5L1 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
            </div>
            <div ref={scrollElement} className='overflow-x-auto hide-scroll flex svelte-9k01mu scroll-smooth'>
                {
                    listGame?.map((game: any, index: number) =>
                        <div key={index}>
                            <GameItem gameInfo={game} />
                        </div>
                    )
                }

            </div>
        </div>
    )
}
