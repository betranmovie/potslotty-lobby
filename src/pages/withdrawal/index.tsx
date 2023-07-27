import cryptobotIcon from "@/assets/icons/cryptobot.png";
import { ReactElement, useEffect, useState } from "react";


const TON_ADDRESS = 'EQDROU9C8Ag73oX3T_PVs8cVKuaLIYDcLP4YGq5wjhfhpqgJ'
const API_TRANSFER = 'https://app.tonkeeper.com/transfer/'
// Icons


const PRICE_NUMBERS = [5, 10, 20, 50, 100, 150, 200, 250];



const WithdrawalPage = () => {
    let balance = Number(localStorage.getItem("balance"))
    const [numValue, setNumValue] = useState<number>(balance)


    useEffect(()=>{



    }
    )
    return (
        <div className="mx-4 font-semibold text-white">
            <div className="tab-group flex font-semibold">
                <button className="active-tab tab svelte-s8eivf m-0 inline-block w-full rounded-t-md px-2 py-3">
                    <h3>Withdrawal</h3>
                </button>{" "}

            </div>{" "}
            <div className="svelte-s8eivf rounded-b-md border">
                <div className="mx-4 mb-4">
                    <div className="mx-auto my-10  content-center self-center">
                        <span className="flex h-9 items-center rounded-md py-0.5 text-sm font-medium">
                            <input
                                className="deposit-input svelte-s8eivf w-full border-transparent text-5xl flex text-center"
                                type="number"
                                min={0}
                                max={balance}
                                value={numValue}
                                onChange={(e) => setNumValue(Number(e.target.value))}
                                step="0.1"
                            />

                        </span>
                    </div>



                    <div className="pt-6">
                        <PaymentOptions />

                        <div className="svelte-s8eivf mt-4 grid grid-cols-1">
                            <button disabled className="flex  justify-center items-center p-5 rounded-lg  bg-[#2a2a2a]">
                                Withdrawal
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PaymentOptionButton = ({
    icon,
    label,
    isActive
}: {
    icon: ReactElement;
    label: string;
    isActive?: boolean;
}) => (
    <button className={`payment-option svelte-s8eivf mr-4 rounded-lg border ${isActive && "!border-[#e3a117]"}`}>
        <div className="flex h-20 w-40 items-center">
            <div className="mx-auto">
                {icon}
                <p className="text-s mt-2 text-center">{label}</p>
            </div>
        </div>
    </button>
);

export const PaymentOptions = () => (
    <div className="mb-6">
        <div className="hide-scroll svelte-s8eivf flex overflow-x-auto">
            <PaymentOptionButton
                icon={
                    <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svelte-s8eivf mx-auto h-8"
                    >
                        <rect width={40} height={40} rx={20} fill="url(#a)" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.217 18.76c0-2.19 0-3.286.427-4.124a3.913 3.913 0 0 1 1.71-1.71c.837-.426 1.933-.426 4.124-.426h5.087c2.192 0 3.287 0 4.124.427a3.913 3.913 0 0 1 1.71 1.71c.122.238.21.498.271.798h-3.105c-.91 0-1.364 0-1.74.082a3.587 3.587 0 0 0-2.743 2.742C21 18.636 21 19.091 21 20c0 .91 0 1.364.082 1.74a3.587 3.587 0 0 0 2.742 2.743c.377.082.832.082 1.741.082h3.105c-.062.3-.149.56-.27.798a3.914 3.914 0 0 1-1.71 1.71c-.838.427-1.933.427-4.125.427h-5.087c-2.191 0-3.287 0-4.124-.427a3.914 3.914 0 0 1-1.71-1.71c-.427-.837-.427-1.932-.427-4.124v-2.478ZM22.304 20c0-1.217 0-1.825.226-2.295.225-.466.6-.842 1.066-1.066.47-.226 1.078-.226 2.295-.226h1.305c1.216 0 1.825 0 2.294.226.466.224.842.6 1.067 1.066.226.47.226 1.078.226 2.295 0 1.217 0 1.825-.227 2.295-.224.466-.6.841-1.066 1.066-.47.226-1.077.226-2.294.226H25.89c-1.217 0-1.825 0-2.294-.226a2.282 2.282 0 0 1-1.067-1.066c-.226-.47-.226-1.078-.226-2.295Zm4.24 0a1.304 1.304 0 1 1-2.61 0 1.304 1.304 0 0 1 2.61 0Z"
                            fill="#fff"
                        />
                        <defs>
                            <linearGradient
                                id="a"
                                x1={20}
                                y1={0}
                                x2={20}
                                y2={40}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#60BFEF" />
                                <stop offset={1} stopColor="#0094FE" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
                label="@Wallet"
                isActive={true}
            />
            <PaymentOptionButton
                icon={
                    <img
                        src={cryptobotIcon.src}
                        alt="@CryptoBot logo"
                        className="mx-auto h-8 rounded-full"
                    />
                }
                label="@CryptoBot"
            />
            <PaymentOptionButton
                icon={
                    <svg
                        className="mx-auto h-[32px]"
                        viewBox="0 1 32 30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 13L0 7L16 1L32 7L16 13Z" fill="#45AEF5" />
                        <path opacity="0.6" d="M16 13L32 7L16 31V13Z" fill="#45AEF5" />
                        <path opacity="0.8" d="M16 13L0 7L16 31V13Z" fill="#45AEF5" />
                    </svg>
                }
                label="Tonkeeper"
            />
            <PaymentOptionButton
                icon={
                    <svg
                        viewBox="12.81 13.197 29.476 26.474"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-[32px]"
                    >
                        <defs>
                            <linearGradient
                                id="paint0_linear_144_910"
                                x1="12.2619"
                                y1="23.5857"
                                x2="42.4751"
                                y2="23.2692"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9889FE" />
                                <stop offset="0.495" stopColor="#68A3F1" />
                                <stop offset={1} stopColor="#61A8EA" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_144_910"
                                x1="15.8412"
                                y1="17.2823"
                                x2="37.6326"
                                y2="17.1768"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#B69EFD" />
                                <stop offset={1} stopColor="#9BB7FC" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_144_910"
                                x1="27.0004"
                                y1="27.2974"
                                x2="27.0004"
                                y2="40.8799"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#B3C9FA" />
                                <stop offset={1} stopColor="#A3D2F6" />
                            </linearGradient>
                        </defs>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.2327 14.4817C22.2853 14.458 22.3424 14.4458 22.4001 14.4458H31.6001C31.6578 14.4458 31.7149 14.458 31.7676 14.4817L37.9643 17.2721C38.0367 17.3046 38.098 17.3575 38.1409 17.4243L41.673 22.9239C41.7697 23.0746 41.7581 23.2708 41.6442 23.4088L27.3153 40.7712C27.1516 40.9695 26.8486 40.9695 26.685 40.7712L12.3561 23.4088C12.2422 23.2708 12.2305 23.0746 12.3273 22.9239L15.8593 17.4243C15.9023 17.3575 15.9636 17.3046 16.0358 17.2721L22.2327 14.4817Z"
                            fill="url(#paint0_linear_144_910)"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.2327 14.4817C22.2853 14.458 22.3424 14.4458 22.4001 14.4458H31.6001C31.6578 14.4458 31.7149 14.458 31.7676 14.4817L37.9643 17.2721C38.0367 17.3046 38.098 17.3575 38.1409 17.4243L41.673 22.9239C41.7697 23.0746 41.7581 23.2708 41.6442 23.4088H12.3561C12.2422 23.2708 12.2305 23.0746 12.3273 22.9239L15.8593 17.4243C15.9023 17.3575 15.9636 17.3046 16.0358 17.2721L22.2327 14.4817Z"
                            fill="url(#paint1_linear_144_910)"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M27.0004 19.9102L32.5907 27.2971H21.4102L27.0004 19.9102Z"
                            fill="#95B0FF"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M26.6666 40.7273C26.8379 40.9343 27.1571 40.9301 27.3228 40.7187L28.895 38.714L32.5907 27.2974H21.4102L24.9999 38.714L26.6666 40.7273Z"
                            fill="url(#paint2_linear_144_910)"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M27.0004 19.9101L17.0903 18.4429L21.4101 27.2971L27.0004 19.9101Z"
                            fill="#D7D6FC"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M12.356 23.4088L17.0898 18.4429L21.4096 27.2971L12.356 23.4088Z"
                            fill="#BDB3F9"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M27 19.9101L36.91 18.4429L32.5902 27.2971L27 19.9101Z"
                            fill="#6E97FF"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M41.6443 23.4088L36.9106 18.4429L32.5908 27.2971L41.6443 23.4088Z"
                            fill="#A4CCFA"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M41.6441 23.4094L36.9104 18.4435L37.9777 17.2798C37.9977 17.2901 38.0562 17.3154 38.1153 17.3884C38.1913 17.4821 40.4088 20.7717 41.6729 22.9246C41.7889 23.122 41.7299 23.306 41.6441 23.4094Z"
                            fill="#799FF0"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M12.3562 23.4094L17.0898 18.4435L16.0226 17.2798C16.0025 17.2901 15.9441 17.3154 15.8849 17.3884C15.8089 17.4821 13.5915 20.7717 12.3273 22.9246C12.2114 23.122 12.2704 23.306 12.3562 23.4094Z"
                            fill="#B28DFF"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                        <path
                            d="M18.7307 28.8135C18.691 28.8321 18.6528 28.7854 18.6791 28.7503L19.9484 27.0574C20.321 26.5604 20.3889 25.8988 20.1247 25.3368L19.2252 23.4224C19.2066 23.3828 19.2535 23.3447 19.2886 23.371L20.985 24.6376C21.4831 25.0095 22.146 25.0772 22.7092 24.8136L24.6275 23.916C24.6672 23.8974 24.7053 23.9442 24.6791 23.9792L23.4098 25.6721C23.0371 26.1692 22.9693 26.8307 23.2334 27.3928L24.1329 29.3071C24.1515 29.3467 24.1047 29.3848 24.0695 29.3586L22.3731 28.0919C21.8751 27.72 21.2121 27.6523 20.6489 27.9159L18.7307 28.8135Z"
                            fill="white"
                            transform="matrix(1, 0, 0, 1, 0.548327, -1.249282)"
                        />
                    </svg>
                }
                label="Tonhub"
            />
            <PaymentOptionButton
                icon={
                    <svg
                        className="svelte-s8eivf mx-auto h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M144 64H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80C0 53.5 21.5 32 48 32zm96 288H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16zM48 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48zM304 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H304zM256 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80zm0 224c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v68h64V304c0-8.8 7.2-16 16-16s16 7.2 16 16v84c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V320H288V472c0 8.8-7.2 16-16 16s-16-7.2-16-16V304zM88 104h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16zM72 376c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V376zM344 104h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H344c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16zM320 448c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V448zm96-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H416c-8.8 0-16-7.2-16-16V448c0-8.8 7.2-16 16-16z" />
                    </svg>
                }
                label="QR Code"
            />
        </div>
    </div>
);

export default WithdrawalPage;
