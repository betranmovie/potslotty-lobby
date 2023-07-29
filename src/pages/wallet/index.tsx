import cryptobotIcon from "@/assets/icons/cryptobot.png";
import { ReactElement, useState } from "react";


const TON_ADDRESS = 'EQDROU9C8Ag73oX3T_PVs8cVKuaLIYDcLP4YGq5wjhfhpqgJ'
const API_TRANSFER = 'https://app.tonkeeper.com/transfer/'
// Icons


const PRICE_NUMBERS = [5, 10, 20, 50, 100, 150, 200, 250];



const WalletPage = () => {
    const [numValue, setNumValue] = useState<number>(5)

    return (
        <div className="mx-4 font-semibold text-white">
            <div className="tab-group flex font-semibold">
                <button className="btn active-tab tab svelte-s8eivf m-0 inline-block w-full rounded-t-md px-2 py-3">
                    <h3>Deposit</h3>
                </button>{" "}
                <button className="bg-brandblue-600 tab svelte-s8eivf m-0 inline-block w-full rounded-tr-md px-2 py-1">
                    <h3>Buy Crypto</h3>
                </button>
            </div>{" "}
            <div className="svelte-s8eivf rounded-b-md border">
                <div className="mx-4 mb-4">
                    <div className="mx-auto my-10 mr-4 content-center self-center flex justify-end">
                        <span className="inline-flex h-9 items-center rounded-md px-2.5 py-0.5 text-sm font-medium">
                            <input
                                className="deposit-input svelte-s8eivf w-16 border-transparent text-3xl"
                                type="number"
                                min={0}
                                defaultValue={numValue}
                                step="0.1"
                            />{" "}
                            <button className="text-brandblue-200 w-max flex items-center py-2 justify-between px-1.5 payment-method-button svelte-s8eivf ml-2 pr-3 rounded-md text-lg">
                                <img className="ml-1 inline-block h-6 w-6" src="assets/images/icons/icon_money.svg" alt="icon_money" />{" "}
                                <span className="mx-2">TON</span>{" "}
                                <img className="svg-inline--fa fa-caret-down h-[6px] inline" src="assets/images/icons/icon_down-round.svg" alt="icon_down-round" />
                                {/* <i class="fa-light fa-caret-down"></i> */}
                            </button>
                        </span>
                    </div>

                    <div className="hide-scroll svelte-s8eivf flex overflow-x-auto mt-4">
                        {PRICE_NUMBERS?.map((number) => (
                            <div
                                key={number}
                                className="game-icon-container svelte-s8eivf mr-3 flex h-12 w-20 flex-shrink-0 cursor-pointer flex-wrap items-center justify-center rounded-md"
                                onClick={() => setNumValue(number)}
                            >
                                {number}
                            </div>
                        ))}
                    </div>

                    <div className="pt-6">
                        <PaymentOptions />

                        <div className="svelte-s8eivf mt-4 grid grid-cols-1">
                            <a href={`${API_TRANSFER}${TON_ADDRESS}?amount=${numValue}`} className="flex justify-center items-center button deposit-button h-12 common-button svelte-9k01mu">
                                Deposit
                            </a>{" "}
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
        <div className="flex h-20 w-36 items-center">
            <div className="mx-auto">
                <div className={`${isActive ? "payment-option-icon" : "bg-[#8E8D91]"} w-[30px] h-[30px] m-auto flex items-center rounded-[50%]`}>
                    {icon}
                </div>
                <p className="text-s mt-2 text-center">@{label}</p>
            </div>
        </div>
    </button>
);

export const PaymentOptions = () => (
    <div className="mb-6">
        <div className="hide-scroll svelte-s8eivf flex overflow-x-auto">
            {/* <PaymentOptionButton
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
            /> */}
            {/* <PaymentOptionButton
                icon={
                    <img
                        src={cryptobotIcon.src}
                        alt="@CryptoBot logo"
                        className="mx-auto h-8 rounded-full"
                    />
                }
                label="@CryptoBot"
            /> */}
            <PaymentOptionButton
                isActive={true}
                icon={
                    <img className="mx-auto h-[20px]" src="assets/images/icons/icon_wallet.svg" alt="icon_wallet" />
                }
                label="Wallet"
            />
            <PaymentOptionButton
                icon={
                    <img className="mx-auto h-[20px]" src="assets/images/icons/icon_crypto-bot.svg" alt="icon_crypto-bot" />
                }
                label="CryptoBot"
            />
            {/* <PaymentOptionButton
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
            /> */}
        </div>
    </div>
);

export default WalletPage;
