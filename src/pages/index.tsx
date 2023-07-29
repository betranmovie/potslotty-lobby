import { fetchListGame } from '@/apis/games';
import BgHLGame from '@/assets/images/ont_godhandfeaturebuy.jpg';
import CategoryList from '@/components/CategoryList';
import { IGame, IGameCategory } from '@/types/games';
import { useEffect, useState } from 'react';
import { TonClient } from "ton";
import {
    Address
} from "ton-core";

import NoImage from '@/assets/images/NoImage.png'

import ThumbnailEarn from '@/assets/images/play_and_earn_bg.png'
import Link from 'next/link';

export default function index() {
    const [listGame, setListGame] = useState<IGameCategory>()
    const [gameOfWeek, setGameOfWeek] = useState<IGame>()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const renderCategory = () => {
        for (let key in listGame) {
            return <CategoryList listGame={listGame[key]} categoryName={key} />
        }
    }

    useEffect(() => {
        (async () => {
            try {
                let client = new TonClient({
                    endpoint: 'https://scalable-api.tonwhales.com/jsonRPC'
                });
                const address = Address.parseFriendly(

                    "EQDROU9C8Ag73oX3T_PVs8cVKuaLIYDcLP4YGq5wjhfhpqgJ"

                ).address;

                const balance = await client.getBalance(address);
                balance.toLocaleString().slice(0, 4).replace(',', '.')
                // const { value, address, sendIncrement } = useCounterContract();
            } catch (error) {

            }
            let reslistGame = await fetchListGame()
            let listGameOfTheWeek = reslistGame["Game Of Week"]
            setGameOfWeek(listGameOfTheWeek[0])
            setListGame(reslistGame)
        })()
    }, [])

    return (
        <div>

            <div className='px-4 mb-4 mt-4' >
                {gameOfWeek && <div className='game-off-week w-full game-of-the-week rounded-xl grid grid-cols-2'>
                    <div className='pl-4 h-full flex flex-col justify-center'>
                        <h1 className='text-black heading-1 uppercase'>GAME OF THE WEEK</h1>
                        <Link href={`/play/${gameOfWeek?.casinoId}-${gameOfWeek.id}`}className='btnsecondary mt-3 svelte-u5bxng rounded-xl '>
                            <h1 className='lg:p-5 p-2 font-bold md:text-xl lg:text-2xl bnt-text-1'>Play</h1>
                        </Link>
                    </div>
                    <div className='px-3 game-item flex flex-col justify-center'>
                        <img className='md:h-48 h-28 game-item cursor-pointer object-cover	'
                            src={gameOfWeek.thumbnail}
                            id={gameOfWeek.name}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = NoImage.src
                            }}
                            loading='lazy'
                        />
                    </div>

                </div>}
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
                listGame && Object.keys(listGame).map((key: any) => (
                    <CategoryList listGame={listGame[key]} categoryName={key} />
                ))


            }
            <div className='px-4 mb-5' >
                <a href='/referrals'>
                    <img src={ThumbnailEarn.src} alt="Earn" className='w-full mt-8 rounded-md' />
                </a>
            </div>

        </div>
    )
}
