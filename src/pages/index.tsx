import ListGame from '@/components/ListGame'
import React, { useEffect, useState } from 'react'
import BgHLGame from '@/assets/images/ont_godhandfeaturebuy.jpg'
import ThumbnailEarn from '@/assets/images/earn.png'

import CategoryList from '@/components/CategoryList'
import { login } from '@/apis/authen'
import { fetchListGame } from '@/apis/games'
import { IGameCategory } from '@/types/games'

export default function index() {
    const [listGame, setListGame] = useState<IGameCategory>()

    const renderCategory = () => {

        for (let key in listGame) {

            return <CategoryList listGame={listGame[key]} categoryName={key} />
        }
    }



    useEffect(() => {
        (async () => {
            let reslistGame = await fetchListGame()
            setListGame(reslistGame)
        })()
    }, [])




    return (
        <div>
            <div className='px-4 mb-4 mt-4' >
                <div className='w-full game-of-the-week rounded-xl grid grid-cols-2'>
                    <div className='pl-4 h-full flex flex-col justify-center'>
                        <h1 className='text-white text-2xl font-bold uppercase leading-7 font-heading xl:text-9xl lg:text-5xl md:2xl'>GAME OF THE WEEK</h1>
                        <button className='bg-white mt-3 svelte-u5bxng rounded-xl'>
                            <h1 className='lg:p-5 p-2 font-bold svelte-u5bxng md:text-xl lg:text-2xl '>Play</h1>
                        </button>
                    </div>
                    <div className='px-3 h-full flex flex-col justify-center'>
                        <img className=' rounded-xl' src={BgHLGame.src} />
                    </div>

                </div>
            </div>


            {/* List Game By Category */}
            {/* <CategoryList categoryName={"Top 10 🏆"} />
            <CategoryList categoryName={"New Arrivals"} />
            <div className='px-4 mb-5' >
                <a href='/'>
                    <img src={ThumbnailEarn.src} alt="Earn" className='w-full mt-8 rounded-md' />
                </a>
            </div> */}
            {/* <CategoryList categoryName={"Slots"} />

            <CategoryList categoryName={"Crypto Games"} /> */}

            {/* <CategoryList categoryName={"Live Casino"} />

            <CategoryList categoryName={"Buy Feature"} />
            <CategoryList categoryName={"Wild Wild West"} /> */}

            {

                renderCategory()

            }
            <div className='px-4 mb-5' >
                <a href='/'>
                    <img src={ThumbnailEarn.src} alt="Earn" className='w-full mt-8 rounded-md' />
                </a>
            </div>


            <div className='px-4 mb-5' >
                <a href='/'>
                    <img src={ThumbnailEarn.src} alt="Earn1" className='w-full mt-8 rounded-md' />
                </a>
            </div>





        </div>
    )
}
