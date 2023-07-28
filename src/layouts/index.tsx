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
        </>
      </div>
      <FooterNav />
    </>
  )
}
