import React from 'react'
import { LiveIcon } from '../../../../public/svg/Live'
import { Media } from '../../../../public/svg/Media'
import { Friends } from '../../../../public/svg/Friends'

function Post({setVisible}) {
  return (
    <div className='w-[100%] bg-hover_color px-5 py-5 mt-5 rounded-md'>
      <div className='flex items-center gap-x-3 bg-white px-2 py-2 rounded-full mb-4'>
        <div className='w-12 h-12 bg-black rounded-full'></div>
        <div className='w-[80%]' onClick={()=>setVisible(true)}><input type='text' placeholder='Type Your Content..'  className='w-[100%] text-black focus:outline-none'/></div>
      </div>
      <div className='border-t-[1px] border-line_color flex justify-around mt-3 relative'>
        <div className='flex items-center gap-x-[2px] sm:gap-x-2 mt-6 cursor-pointer activity'>
          <div><LiveIcon/></div>
          <div><p className='font-opensans font-medium text-[12px] mt-[3px] sm:mt-0 sm:text-sm md:text-base lg:text-sm xl:text-base  hidden sm:block lg:hidden xl:block active absolute top-[50%] -transition-x[50%]'>Video</p></div>
        </div>
        <div className='flex items-center gap-x-[2px] sm:gap-x-2 mt-6 cursor-pointer activity'>
          <div><Media/></div>
          <div><p className='font-opensans font-medium text-[12px] mt-[3px] sm:mt-0 sm:text-sm md:text-base lg:text-sm xl:text-base  hidden sm:block lg:hidden xl:block active absolute top-[50%] -transition-x[50%]'>Image/Gallary</p></div>
        </div>
        <div className='flex items-center gap-x-[2px] sm:gap-x-2 mt-6 cursor-pointer activity'>
          <div><Friends/></div>
          <div><p className='font-opensans font-medium text-[12px] mt-[3px] sm:mt-0 sm:text-sm md:text-base lg:text-sm xl:text-base hidden sm:block lg:hidden xl:block active absolute top-[50%] -transition-x[50%] transition-all ease-linear duration-3'>Activities</p></div>
        </div>
      </div>
    </div>
  )
}

export default Post
