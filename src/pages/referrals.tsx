const ReferralsPage = () => {
  return (
    <div className="px-2 referrals">
       <div className="px-4">
        <img
          src="assets/images/banners/banner_earn-commision.jpeg"
          className="rounded-md w-full mx-auto mt-4"
          alt="Crash Game banner"
        />
      </div>{" "}
      <div className="mx-4 mt-5">
        <div className="payment-option rounded-lg py-2 px-4 flex">
          <img
            src="assets/images/icons/icon_warning.svg"
            className="rounded-md"
            alt="icon_warning"
          />
          <span className="text-white ml-4 text-xs">To receive refarral commisions, you must deposit a minium of 1 TON from your wallet!</span>
        </div>
        <div className="border bg-[#1D1C22] rounded-xl p-2 mt-5 mb-8 border-[#f5e544]">
          <div className="p-2">
            <h2 className="text-xl font-semibold uppercase text-white">Your Referral</h2>{" "}
            <p className="mt-6 font-normal text-sm text-white">
              You get 10% from house edge from every direct referral and 1% every
              tier 2 referrals!
              <br />{" "}
              <span className="text-xs mt-3 block text-[#8E8D91]">
                * Earnings paid on monthly basis
              </span>
            </p>
          </div>{" "}
          <h3 className="text-lg text-center mt-2 mb-4 select-none">
            <span className="h-8 w-full inline-flex items-center rounded-md balance-container px-2.5 py-0.5 text-sm font-bold bg-[#fff7d4]">
              <span className="mx-auto special-text text-black">
                <span className="font-semibold text-xs"></span>
                Coming Soon
              </span>
            </span>
          </h3>{" "}
          <div className="flex flex-wrap justify-center items-center">
            <button className="grow h-12 rounded-md game-icon-container cursor-pointer mr-4 svelte-zj5ccq bg-copy">
              <p className="text-md font-semibold special-text svelte-zj5ccq flex justify-center text-black">
                <img className="mr-2" src="assets/images/icons/icon_copy.svg" alt="icon_copy" />
                Copy
              </p>
            </button>{" "}
            <button className="grow h-12 rounded-md game-icon-container cursor-pointer svelte-zj5ccq bg-share">
              <p className="text-md font-semibold special-text svelte-zj5ccq flex justify-center text-black">
                <img className="mr-2" src="assets/images/icons/icon_share.svg" alt="icon_share" />
                Share
              </p>
            </button>
          </div>
        </div>{" "}
        <h1 className="font-semibold uppercase text-lg py-2 mt-5 text-white">Statistics</h1>{" "}
        <div className="mb-4">
          <div className="overflow-x-auto flex svelte-zj5ccq">
            <button className="mr-2 payment-option selected-payment-option rounded-lg svelte-zj5ccq">
              <div className="h-8 flex items-center">
                <div className="mx-auto">
                  <p className="text-xs font-semibold px-2 text-center svelte-zj5ccq">
                    This Month
                  </p>
                </div>
              </div>
            </button>{" "}
            <button className="mr-2 payment-option  rounded-lg svelte-zj5ccq">
              <div className="h-8 flex items-center">
                <div className="mx-auto">
                  <p className="text-xs font-semibold px-1 text-center svelte-zj5ccq">
                    Last Month
                  </p>
                </div>
              </div>
            </button>{" "}
            <button className="mr-2 payment-option  rounded-lg svelte-zj5ccq">
              <div className="h-8 flex items-center">
                <div className="mx-auto">
                  <p className="text-xs font-semibold px-1 text-center svelte-zj5ccq">
                    All Time
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>{" "}
        <div className="stats-container p-2 mt-3 flex svelte-zj5ccq rounded-[10px] text-white">
          <h2 className="text-base font-semibold inline-block mt-1 ml-1">
            Referrals
          </h2>{" "}
          <span className="grow" />{" "}
          <p className="text-2xl font-semibold inline-block mr-2">0</p>
        </div>{" "}
        <div className="stats-container p-2 mt-3 flex svelte-zj5ccq rounded-[10px] text-white">
          <h2 className="text-base font-semibold mt-1 ml-1">Referrals wagered</h2>{" "}
          <span className="grow" />{" "}
          <div className="text-2xl font-semibold flex mr-2">
            <img className="mr-2" src="assets/images/icons/icon_money.svg" alt="icon_money" />{" "}
            0
          </div>
        </div>{" "}
        <div className="stats-container p-2 mt-3 flex svelte-zj5ccq rounded-[10px] text-white">
          <h2 className="text-base font-semibold mt-1 ml-1">You've earned</h2>{" "}
          <span className="grow" />{" "}
          <div className="text-2xl font-semibold flex mr-2">
            <img className="mr-2" src="assets/images/icons/icon_money.svg" alt="icon_money" />{" "}
            0
          </div>
        </div>{" "}
        <img
          src="assets/images/banners/banner_earn-friends.jpeg"
          className="rounded-md w-full mx-auto mt-5"
          alt="Crash Game banner"
        />{" "}
      </div>
    </div>
  )
}
export default ReferralsPage;