import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
    }, [])

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
                    className="brand-button-2 common-button svelte-9k01mu mr-3 h-8 rounded-md px-4 text-sm font-semibold uppercase"
                >
                    Deposit
                </button>
                <button className="payment-method-button bg-brandblue-400 svelte-1lmjpjc inline-flex h-8 w-full cursor-auto items-center pr-2 text-sm font-semibold text-white mr-2">
                    <svg
                        className="mx-auto ml-2 mr-2 inline-block h-4 w-4"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={28} cy={28} r={28} fill="#0088CC" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.2088 18.5044L35.9132 18.5043C36.4688 18.5043 37.024 18.5859 37.6042 18.8564C38.2997 19.1806 38.6685 19.6916 38.9269 20.0695C38.947 20.0989 38.9658 20.1292 38.9832 20.1602C39.287 20.701 39.4436 21.2849 39.4436 21.913C39.4436 22.5098 39.3016 23.16 38.9832 23.7267C38.9802 23.7322 38.9771 23.7375 38.974 23.7429L29.0522 40.7864C28.8334 41.1623 28.4307 41.3928 27.9958 41.3913C27.5609 41.3898 27.1598 41.1563 26.9437 40.7789L17.2041 23.7718C17.2013 23.7672 17.1985 23.7626 17.1957 23.7579C16.9728 23.3906 16.6281 22.8226 16.5678 22.0896C16.5124 21.4155 16.6639 20.7401 17.0026 20.1545C17.3413 19.5688 17.8512 19.1006 18.4645 18.814C19.1221 18.5067 19.7885 18.5044 20.2088 18.5044ZM26.7827 20.9391L20.2088 20.9391C19.7769 20.9391 19.6111 20.9657 19.4952 21.0199C19.3349 21.0947 19.2003 21.2178 19.1103 21.3734C19.0203 21.5291 18.9796 21.7095 18.9944 21.8901C19.0029 21.9936 19.0451 22.112 19.294 22.5225C19.2992 22.5311 19.3043 22.5398 19.3093 22.5485L26.7827 35.5984V20.9391ZM29.2175 20.9391V35.6629L36.864 22.5278C36.9503 22.371 37.0088 22.1444 37.0088 21.913C37.0088 21.7253 36.9699 21.5623 36.8829 21.3943C36.7916 21.263 36.736 21.1935 36.6895 21.1459C36.6496 21.1052 36.6189 21.0834 36.5755 21.0632C36.3947 20.9789 36.2097 20.9391 35.9132 20.9391L29.2175 20.9391Z"
                            fill="white"
                        />
                    </svg>{" "}
                    <span   onClick={() => router.push("/withdrawal")} className="text-white cursor-pointer">{balance}</span>
                </button>
                <Link href="/profile" className="contents">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                </Link>
            </div>
        </div>
    );
}
