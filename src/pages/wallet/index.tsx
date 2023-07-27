import { useLocalStorage } from 'usehooks-ts'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";




export default function GameDetail() {
    const account = useAccount();

    return <div className=' h-screen bg-[#101523] text-white flex flex-col justify-center items-center'>


        <ConnectButton />
        <div className='text-white mt-10'>
            {account.isConnected && `Account ${account.address} is now connected!`}
        </div>
    </div>
};