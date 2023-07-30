import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from 'usehooks-ts'
import Link from "next/link";
import {
    Contract,
    ContractProvider,
    Sender,
    Address,
    Cell,
    contractAddress,
    beginCell,
} from "ton-core";
import Logo from '@/assets/images/logo.png'
import { WalletContractV4, TonClient, fromNano } from "ton";

export default function Header() {
    const router = useRouter();
    const [balance, setBalance] = useState<string>("0.00")
    const [userData, setUserData] = useLocalStorage('userdata', null)

    

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

                setBalance(balance.toLocaleString().slice(0, 4).replace(',', '.'))
                localStorage.setItem("balance", balance.toLocaleString().slice(0, 4).replace(',', '.'))
                // const { value, address, sendIncrement } = useCounterContract();
            } catch (error) {

            }


        })()
    }, [userData])

    return (
        <div className="flex items-center justify-between p-5 text-white">
            <Link href="/">
                <img
                    className=" object-cover  h-10 "
                    src={Logo.src}
                    alt="logo"
                />
            </Link>
            <div className="flex">
                <button
                    onClick={() => router.push("/wallet")}
                    className="brand-button-2 common-button svelte-9k01mu mr-1 h-8 rounded-md px-4 text-sm font-semibold"
                >
                    Deposit
                </button>
                <button className="rounded-[10px] !w-auto flex flex-[0_0_auto] bg-[#22201c] svelte-1lmjpjc h-8 w-auto cursor-auto items-center pr-2 text-sm font-semibold text-white mr-1 px-2">
                    <img src="assets/images/icons/icon_money.svg" alt="icon_money" />{" "}
                    <span className="text-[#f5e544] cursor-pointer">{balance}</span>
                </button>
                <button className="rounded-[10px] cursor-no-drop bg-[#22201c] svelte-1lmjpjc h-8 w-auto cursor-auto items-center pr-2 text-sm font-semibold text-white mr-1 px-2">
                    <img className="w-[20px]" src="assets/images/icons/icon_gift.svg" alt="icon_gift" />{" "}
                </button>
                <Link href="/profile" className="contents">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                        className="w-[30px] h-[30px]"
                        alt="logo"
                    />
                </Link>
            </div>
        </div>
    );
}
