import React from 'react'
import Logo from '@/assets/images/logo.png'

function Loader() {
  return (
    <div className='backdrop-loader flex flex-col justify-center  items-center'>
    <img className="animation" src={Logo.src}/>
    {/* <span className="loader">Loading</span> */}
</div>
  )
}

export default Loader