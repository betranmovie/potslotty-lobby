import { useState } from 'react';

const ProfileUser = () => {
  const [withdrawals, setWithdrawals] = useState(true);

  return (
    <div className="px-4 profile-user">
      <div>
        <div className="level-container w-full p-2 inline-flex items-center font-semibold svelte-13o469e">
          <img
            className="rounded-full m-2 h-14"
            src="https://api.crashgame247.io/users/profile-picture?id=898663888"
            alt=""
          />
          <div className="h-8 w-full -mt-3 text-white"><div className="w-full px-3"><div
            className="inline-flex items-center"
          >
            <h1
              className="text-center text-base rounded-md border mr-1 bg-brandblue-400 px-3 border-[#28293F]"
            >Anh Việt</h1>
            <h2
              className="border text-base text-center rounded-md bg-brandblue-400 px-3 border-[#28293F]"
            >LVL 1</h2>
          </div>
            <div className="w-full mt-2 inline-block progress-bar-container bg-[#33354f] rounded-[27px]" >
              <div className="progress-bar-fill text-xs font-medium text-center p-0.5 leading-none rounded-full svelte-13o469e" style={{ width: "25%" }}>25%</div>
            </div>
          </div>
          </div>
        </div>
        <div className="visible text-white bg-[#28293F] border text-left p-4 my-4 rounded-lg border-white">
          To withdraw, please add your TON wallet address
          <svg
            className="svg-inline--fa fa-triangle-exclamation ml-1 w-[18px] inline mb-2 ml-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="triangle-exclamation"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          ><path
            fill="currentColor"
            d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184z"
          ></path>
          </svg>
          <br />
          <div className="flex justify-between">
            <input
              className="buy-input border-b border-white p-0 bg-transparent text-sm w-4/6 inline-block svelte-13o469e"
              type="text"
              placeholder="TON address here"
            />
            <button className="text-sm rounded-md py-1 w-3/12 ml-3 payment-method-button inline-block border border-white border-[#28293F]">
              SAVE
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold py-2 mt-5 uppercase text-white">Settings</h1>
        <div className="h-screen/4">
          <div>
            <ul className="font-semibold">
              <div className="setting-container p-2 flex svelte-13o469e">
                <h2 className="inline-block mt-1 ml-1 mb-1 text-white">Auto withdrawals</h2>
                <span className="grow"></span>
                <div
                  className={`${withdrawals ? 'bg-gray-200' : 'bg-blue-600'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 setting-button mt-1 svelte-13o469e`}
                  onClick={() => {
                    setWithdrawals(!withdrawals);
                  }}
                >
                  <div
                    className={
                      "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                      (withdrawals ? null : ' transform translate-x-5')
                    }
                  ></div>
                </div>
              </div>
              <div className="setting-container p-2 flex mt-4 svelte-13o469e">
                <h2 className="inline-block mt-1 ml-1 mb-1 text-white">Withdraw</h2>
                <span className="grow"></span>
                <button className="bg-gray-400 h-8 text-xs px-2 rounded-md uppercase text-white">
                  {withdrawals ? '>= 1 Ton Required' : 'Turn off auto withdrawal'}
                </button>
              </div>
            </ul>
          </div>
        </div>
        <h1 className="text-lg py-2 mt-5 uppercase font-semibold text-white">Transactions</h1>
        <div className="h-screen/4"><div><ul> </ul></div></div>
        <footer className="text-center mb-24 text-xs text-brandblue-200">
          <p className="mt-4 mb-1">All rights Reserved - © Whale Games
            <span className="text-[0.60rem]">[v2.0.2]</span>
          </p>
          <p>
            <a className="mr-1" href="/terms-and-conditions">Terms and Conditions</a>
            -
            <a className="cursor-pointer ml-1">Support</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
export default ProfileUser;
