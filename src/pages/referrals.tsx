const ReferralsPage = () => {
  return (
    <div className="px-2 referrals">
      <div className="px-4">
        <img
          src="https://tg-cdn-03.crashgame247.io/banner_5.png"
          className="rounded-md w-full mx-auto mt-4"
          alt="Crash Game banner"
        />
      </div>{" "}
      <div className="mx-4">
        <img
          className="my-4"
          src="https://tg-cdn-03.crashgame247.io/withdraw_notice.svg"
          alt="Withdraw notice message"
        />{" "}
        <div className="border rounded-md p-2 mt-5 mb-8 border-[#28293F]">
          <div className="p-2">
            <h2 className="text-xl font-semibold uppercase text-white">Your Referral</h2>{" "}
            <p className="mt-6 font-semibold text-sm text-white">
              You get 10% from house edge from every direct referral and 1% every
              tier 2 referrals!
              <br />{" "}
              <span className="text-xs mt-3 block">
                * Earnings paid on monthly basis
              </span>
            </p>
          </div>{" "}
          <h3 className="text-lg text-center mt-2 mb-4 select-none">
            <span className="h-8 w-full inline-flex items-center rounded-md balance-container px-2.5 py-0.5 text-sm font-bold bg-[#28293F]">
              <span className="mx-auto special-text svelte-zj5ccq">
                <span className="font-semibold text-xs">whale.io/?start=</span>
                115bdc993c8aa33e
              </span>
            </span>
          </h3>{" "}
          <div className="flex flex-wrap justify-center items-center">
            <button className="grow h-12 rounded-md game-icon-container cursor-pointer mr-4 svelte-zj5ccq bg-[#28293F]">
              <p className="text-md font-semibold special-text svelte-zj5ccq">
                Copy
              </p>
            </button>{" "}
            <button className="grow h-12 rounded-md game-icon-container cursor-pointer svelte-zj5ccq bg-[#28293F]">
              <p className="text-md font-semibold special-text svelte-zj5ccq">
                Share
              </p>
            </button>
          </div>
        </div>{" "}
        <h1 className="font-semibold uppercase text-lg py-2 mt-5 text-white">Statistics</h1>{" "}
        <div className="mb-4">
          <div className="overflow-x-auto flex svelte-zj5ccq">
            <button className="mr-2 payment-option selected-payment-option rounded-lg svelte-zj5ccq">
              <div className="h-6 w-20 flex items-center">
                <div className="mx-auto">
                  <p className="text-xs font-semibold px-1 text-center svelte-zj5ccq">
                    This Month
                  </p>
                </div>
              </div>
            </button>{" "}
            <button className="mr-2 payment-option  rounded-lg svelte-zj5ccq">
              <div className="h-6 w-20 flex items-center">
                <div className="mx-auto">
                  <p className="text-xs font-semibold px-1 text-center svelte-zj5ccq">
                    Last Month
                  </p>
                </div>
              </div>
            </button>{" "}
            <button className="mr-2 payment-option  rounded-lg svelte-zj5ccq">
              <div className="h-6 w-20 flex items-center">
                <div className="mx-auto">
                  <p className="text-xs font-semibold px-1 text-center svelte-zj5ccq">
                    All Time
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>{" "}
        <div className="stats-container p-2 mt-3 flex svelte-zj5ccq bg-[#28293f] rounded-[10px] border-t border-[#34364f] text-white">
          <h2 className="text-base font-semibold inline-block mt-1 ml-1">
            Referrals
          </h2>{" "}
          <span className="grow" />{" "}
          <p className="text-2xl font-semibold inline-block mr-2">0</p>
        </div>{" "}
        <div className="stats-container p-2 mt-3 flex svelte-zj5ccq bg-[#28293f] rounded-[10px] border-t border-[#34364f] text-white">
          <h2 className="text-base font-semibold mt-1 ml-1">Referrals wagered</h2>{" "}
          <span className="grow" />{" "}
          <div className="text-2xl font-semibold flex mr-2">
            <svg
              width={22}
              height={22}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 mr-2"
            >
              <circle cx={28} cy={28} r={28} fill="#0088CC" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.2088 18.5044L35.9132 18.5043C36.4688 18.5043 37.024 18.5859 37.6042 18.8564C38.2997 19.1806 38.6685 19.6916 38.9269 20.0695C38.947 20.0989 38.9658 20.1292 38.9832 20.1602C39.287 20.701 39.4436 21.2849 39.4436 21.913C39.4436 22.5098 39.3016 23.16 38.9832 23.7267C38.9802 23.7322 38.9771 23.7375 38.974 23.7429L29.0522 40.7864C28.8334 41.1623 28.4307 41.3928 27.9958 41.3913C27.5609 41.3898 27.1598 41.1563 26.9437 40.7789L17.2041 23.7718C17.2013 23.7672 17.1985 23.7626 17.1957 23.7579C16.9728 23.3906 16.6281 22.8226 16.5678 22.0896C16.5124 21.4155 16.6639 20.7401 17.0026 20.1545C17.3413 19.5688 17.8512 19.1006 18.4645 18.814C19.1221 18.5067 19.7885 18.5044 20.2088 18.5044ZM26.7827 20.9391L20.2088 20.9391C19.7769 20.9391 19.6111 20.9657 19.4952 21.0199C19.3349 21.0947 19.2003 21.2178 19.1103 21.3734C19.0203 21.5291 18.9796 21.7095 18.9944 21.8901C19.0029 21.9936 19.0451 22.112 19.294 22.5225C19.2992 22.5311 19.3043 22.5398 19.3093 22.5485L26.7827 35.5984V20.9391ZM29.2175 20.9391V35.6629L36.864 22.5278C36.9503 22.371 37.0088 22.1444 37.0088 21.913C37.0088 21.7253 36.9699 21.5623 36.8829 21.3943C36.7916 21.263 36.736 21.1935 36.6895 21.1459C36.6496 21.1052 36.6189 21.0834 36.5755 21.0632C36.3947 20.9789 36.2097 20.9391 35.9132 20.9391L29.2175 20.9391Z"
                fill="white"
              />
            </svg>{" "}
            0
          </div>
        </div>{" "}
        <div className="stats-container p-2 mt-3 flex svelte-zj5ccq bg-[#28293f] rounded-[10px] border-t border-[#34364f] text-white">
          <h2 className="text-base font-semibold mt-1 ml-1">You've earned</h2>{" "}
          <span className="grow" />{" "}
          <div className="text-2xl font-semibold flex mr-2">
            <svg
              width={22}
              height={22}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 mr-2"
            >
              <circle cx={28} cy={28} r={28} fill="#0088CC" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.2088 18.5044L35.9132 18.5043C36.4688 18.5043 37.024 18.5859 37.6042 18.8564C38.2997 19.1806 38.6685 19.6916 38.9269 20.0695C38.947 20.0989 38.9658 20.1292 38.9832 20.1602C39.287 20.701 39.4436 21.2849 39.4436 21.913C39.4436 22.5098 39.3016 23.16 38.9832 23.7267C38.9802 23.7322 38.9771 23.7375 38.974 23.7429L29.0522 40.7864C28.8334 41.1623 28.4307 41.3928 27.9958 41.3913C27.5609 41.3898 27.1598 41.1563 26.9437 40.7789L17.2041 23.7718C17.2013 23.7672 17.1985 23.7626 17.1957 23.7579C16.9728 23.3906 16.6281 22.8226 16.5678 22.0896C16.5124 21.4155 16.6639 20.7401 17.0026 20.1545C17.3413 19.5688 17.8512 19.1006 18.4645 18.814C19.1221 18.5067 19.7885 18.5044 20.2088 18.5044ZM26.7827 20.9391L20.2088 20.9391C19.7769 20.9391 19.6111 20.9657 19.4952 21.0199C19.3349 21.0947 19.2003 21.2178 19.1103 21.3734C19.0203 21.5291 18.9796 21.7095 18.9944 21.8901C19.0029 21.9936 19.0451 22.112 19.294 22.5225C19.2992 22.5311 19.3043 22.5398 19.3093 22.5485L26.7827 35.5984V20.9391ZM29.2175 20.9391V35.6629L36.864 22.5278C36.9503 22.371 37.0088 22.1444 37.0088 21.913C37.0088 21.7253 36.9699 21.5623 36.8829 21.3943C36.7916 21.263 36.736 21.1935 36.6895 21.1459C36.6496 21.1052 36.6189 21.0834 36.5755 21.0632C36.3947 20.9789 36.2097 20.9391 35.9132 20.9391L29.2175 20.9391Z"
                fill="white"
              />
            </svg>{" "}
            0
          </div>
        </div>{" "}
        <img
          src="https://tg-cdn-03.crashgame247.io/earn_more.png"
          className="rounded-md w-full mx-auto mt-5"
          alt="Crash Game banner"
        />{" "}
      </div>
    </div>
  )
}
export default ReferralsPage;