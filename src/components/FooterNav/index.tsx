import Link from 'next/link'

const FooterNav = () => {
  return (
    <menu className="w-screen flex !sticky !justify-evenly svelte-1x119o6">
      <div className="flex flex-col">
        <div className="normal-button svelte-1x119o6">
          <Link href="/referrals" className="text-center font-bold text-xs svelte-1x119o6 w-full h-full">
            <button className="rounded-full w-full h-full flex justify-center items-center main-button bg-[#22201c]">
              <img src="assets/images/icons/icon_earn.svg" alt="icon_earn" />
            </button>
          </Link>
        </div>
        <span className="text-center text-[10px] mt-2">Earn</span>
      </div>
      <div className="flex flex-col">
        <div className="normal-button svelte-1x119o6">
          <Link href="/profile" className="text-center font-bold text-xs svelte-1x119o6 w-full h-full">
            <button className="rounded-full w-full h-full flex justify-center items-center main-button bg-[#22201c]">
              <img src="assets/images/icons/icon_profile.svg" alt="icon_profile" />
            </button>
          </Link>
        </div>
        <span className="text-center text-[10px] mt-2">Profile</span>
      </div>
    </menu>
  )
}
export default FooterNav;
