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
          <Iframe url={gameInfo?.url}
            className=''
          
            styles={{
              width: '100%',
              height: '100%'
            }}
          />
         
        </div>

      }
    </div>
  )
}
