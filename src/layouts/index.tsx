import { login } from '@/apis/authen';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Logo from '@/assets/images/logo.png'
import Loader from '@/components/Loader';
import FooterNav from '@/components/FooterNav';
import WelcomePopup from '@/components/Modal/Welcome';
import { useLocalStorage } from 'usehooks-ts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()
  const idGame = router.query.gameId
  const renderChildren = () =>
    React.Children.map(children, (child: any) => React.cloneElement(child));




  useEffect(() => {
    (async () => {
      let userData = await login()
      setTimeout(function () {
        setIsLoading(false)
      }, 1000);

      localStorage.setItem('userdata', JSON.stringify(userData))
    })()
  }, [])

  const isPlay = router.pathname.includes('play')

  return (
    <>
      <div className={`flex flex-col  justify-between bg-black min-h-screen`}>
        <div>
          {!isLoading&& <WelcomePopup />}
          {isLoading && <Loader />}
          {!idGame && <Header />}
          <div>
            {renderChildren()}
          </div>
          {/* <Footer/> */}
          {
            !isPlay && <div className='p-6'>
              <hr className="h-px mt-6  border-0 bg-[#22201c]" />{" "}
              <footer className="text-center mb-2 text-xs text-brandblue-200">
                <p className="mt-4 mb-1 text-[#8e8d91]">All rights Reserved 2023 - [v1.0.0]</p>
                <p className="text-[#C1B539]">
                  <a className="mr-1" href="/terms-and-conditions">Terms and Conditions</a>
                  -
                  <a className="cursor-pointer ml-1">Support</a>
                </p>
              </footer>
            </div>
          }
        </div>
        <>
          {!isPlay && !isLoading && <FooterNav />}
        </>
      </div>
    </>
  )
}
