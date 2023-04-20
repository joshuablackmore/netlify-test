import React from 'react'
import { FaYoutube } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover custom-img">
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/80' />
        <div className="text-white z-[2]">
          <h1 className="text-5xl font-bold text-center">Site under construction</h1>
          <h2 className="flex items-center  justify-center text-center text-3xl font-bold ">click...<a href="https://www.youtube.com/watch?v=z_s1Nb3JwDY&ab_channel=JoshuaBlackmore"><FaYoutube className="text-6xl"/></a>...for now</h2>

        </div>

    </div>
  )
}

export default Hero