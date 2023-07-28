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
          <br />
          <div className="flex justify-between">
            <input
              className="buy-input border-b border-white bg-transparent text-sm w-4/6 inline-block svelte-13o469e"
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
          <p className="mt-4 mb-1">All rights Reserved 2023 - [v1.0.0]</p>
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
