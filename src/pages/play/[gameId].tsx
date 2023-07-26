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
          <iframe className="yFzw6MKed5SilXcABSY5" src="https://api.crashgame247.io/url#tgWebAppData=query_id%3DAAEZSh5dAgAAABlKHl2nK3rM%26user%3D%257B%2522id%2522%253A5857233433%252C%2522first_name%2522%253A%2522Dr%2522%252C%2522last_name%2522%253A%2522Strange%2522%252C%2522username%2522%253A%2522drstrange566%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1690374773%26hash%3Df324ca364a8ace1c4b88079c37b4cd9edfe1d6769473c701abd0d15bb8dd8e90&amp;tgWebAppVersion=6.7&amp;tgWebAppPlatform=weba&amp;tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23212121%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%23aaaaaa%22%2C%22link_color%22%3A%22%238774e1%22%2C%22button_color%22%3A%22%238774e1%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22secondary_bg_color%22%3A%22%230f0f0f%22%7D" title="Whale Web App" sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-storage-access-by-user-activation" allow="camera; microphone; geolocation;"></iframe>
        </div>

      }
    </div>
  )
}
