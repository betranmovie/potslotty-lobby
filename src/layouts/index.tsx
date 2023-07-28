import { login } from '@/apis/authen';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Logo from '@/assets/images/logo.png'
import Loader from '@/components/Loader';
import FooterNav from '@/components/FooterNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()
  const idGame = router.query.gameId
  const renderChildren = () =>
    React.Children.map(children, (child: any) => React.cloneElement(child));


  useEffect(() => {
    (async () => {
      let userData = await login()
      setIsLoading(false)
      localStorage.setItem('userdata', JSON.stringify(userData))
    })()
  }, [])
  return (
    <>
      <div className={`flex flex-col ${idGame ? "" : "p-2"} bg-black min-h-screen`}>
        <>
          {isLoading && <Loader />}
          {!idGame && <Header />}
          <div>
            {renderChildren()}
          </div>
          {/* <Footer/> */}
          <hr className="h-px mt-6 bg-gray-200 border-0 dark:bg-gray-600" />{" "}
          <footer className="text-center mb-24 text-xs text-brandblue-200">
            <p className="mt-4 mb-1">All rights Reserved 2023 - [v1.0.0]</p>
            <p>
              <a className="mr-1" href="/terms-and-conditions">Terms and Conditions</a>
              -
              <a className="cursor-pointer ml-1">Support</a>
            </p>
          </footer>
        </>
      </div>
      <FooterNav />
    </>
  )
}
