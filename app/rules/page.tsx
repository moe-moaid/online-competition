import React from 'react'
import MciContainer from '../components/MciContainer'

function page() {
  return (
      <MciContainer>
          <div className="flex flex-col items-center text-white">
              <h1 className='font-bold text-[40px]'>Rules of <span className='text-legendary-500'>Mackie</span></h1>
              <p>Rules are simple, so simple you can't mess up, listed below</p>
          </div>
    </MciContainer>
  )
}

export default page