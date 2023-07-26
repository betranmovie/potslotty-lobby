import { fetchGameDetail } from '@/apis/games'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe'

export default function GameDetail() {
  const [gameInfo, setGameInfo] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()
  const idGame = router.query.gameId + ""
  console.log(idGame)
  console.log(gameInfo)

  useEffect(() => {
    (async () => {
      let resGameInfo = await fetchGameDetail(idGame)
      setGameInfo(resGameInfo)
      setIsLoading(false)
    })()
  }, [idGame])

  return (
    <div className='flex justify-center items-center'>
      {isLoading ?
        <span className="loader"></span>
        :
        <div className='flex flex-col h-screen w-screen'>
          {/* <iframe src={gameInfo?.url}
            className=''
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-storage-access-by-user-activation" allow="camera; microphone; geolocation;"
            // styles={{
            //   width: '100%',
            //   height: '100%'
            // }}
          /> */}
          <iframe className="yFzw6MKed5SilXcABSY5"   src={gameInfo.url} title="Whale Web App" sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-storage-access-by-user-activation" allow="camera; microphone; geolocation; gyroscope; accelerometer"></iframe>
        </div>

      }
    </div>
  )
}
