import { login } from '@/apis/authen';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [isLoading, setIsLoading] = useState<boolean>(true)
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
    <div className='flex flex-col bg-[#101523] p-2' >
      {isLoading ?

        <div className='flex justify-center h-screen items-center'>
          <span className="loader"></span>

        </div>
        : <>

          <Header />
          <div>
            {renderChildren()}
          </div>
          {/* <Footer/> */}
        </>

      }
    </div>
  )
}
