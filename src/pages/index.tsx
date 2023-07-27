import { fetchListGame } from '@/apis/games';
import BgHLGame from '@/assets/images/ont_godhandfeaturebuy.jpg';
import CategoryList from '@/components/CategoryList';
import { IGameCategory } from '@/types/games';
import { useEffect, useState } from 'react';
import { TonClient } from "ton";
import {
    Address
} from "ton-core";

export default function index() {
    const [listGame, setListGame] = useState<IGameCategory>()

    const renderCategory = () => {

        for (let key in listGame) {

            return <CategoryList listGame={listGame[key]} categoryName={key} />
        }
    }


    const mnemonic = "gentle series goddess law element depth praise fatal section six damp head trick lobster brave job pitch action spirit fire razor repair famous strike"; // your 24 secret words (replace ... with the rest of the words)

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
                            <h1 className='lg:p-5 p-2 font-bold svelte-u5bxng md:text-xl lg:text-2xl'>Play</h1>
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

        </div>
    )
}
