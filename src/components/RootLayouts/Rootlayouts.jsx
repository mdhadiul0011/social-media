import React from 'react'
import HomeLeft from '../HomeComponents/leftpart'
import HomeRight from '../HomeComponents/RightPart'
import { Outlet } from 'react-router-dom'
import Header from '../HomeComponents/PostPart/header'

function Rootlayouts() {
  return (
      <div className='px-2 xl:px-16 grid grid-cols-[3fr] lg:grid-cols-[1fr,4fr,1fr] xl:grid-cols-[1fr,3fr,1fr] py-2 xl:py-8 lg:py-4 box-border gap-x-4 xl:gap-x-12 bg-secondary_bg h-[100vh] text-white'>
          <div className='hidden lg:block'><HomeLeft/></div>
          <div>
            <div>
              <Header/>
            </div>
            <Outlet/>
          </div>
          <div className='hidden lg:block'><HomeRight/></div>
      </div>
  )
}

export default Rootlayouts
