import React, { useRef, useState } from 'react'
import { SearchIcon } from '../../../../public/svg/SearchIcon'
import SearchBox from './searchbox'
import Outsideclick from '../../../function/outsideclick'
import LeftData from '../leftpart/data'
import LefthomeData from '../leftpart/lefthomeData'

function Header() {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const clickOutSide = useRef(null)

  Outsideclick(clickOutSide, ()=> {
    setShow(false)
  })

  Outsideclick(clickOutSide, ()=> {
    setOpen(false)
  })

  return (
    <div className='flex justify-between items-center'>
        <div>
            <h2 className='font-opensans font-bold text-[24px] xl:text-[32px] hidden lg:block'>Feeds</h2>
            <div className='w-20 h-20 rounded-full bg-text_color mx-auto cursor-pointer lg:hidden'></div>
        </div>
        <div className='lg:hidden flex items-center'>
          {LeftData.map((data, index)=>(
            <LefthomeData key={index} data={data}/>
          ))}
        </div>
        <div className='hidden xl:block rounded-full bg-input_color font-opensans font-normal text-base text-black px-6 relative'>
            <div className='flex items-center gap-3 rounded-full w-[30%]' onClick={()=>setShow(!show)}>
              <div className=''><input type='text' placeholder='Search..' className='px-2 py-3 outline-none border-none rounded-full bg-input_color'/> </div>
              <div className='text-secondary_color'><SearchIcon/> </div>
            </div>
            {
              show && <div className='absolute top-[-20px] left-[-180px] xl:left-[-50px] w-[300px] xl:w-[350px] bg-hover_color text-white shadow-md min-h-[300px] xl:min-h-[400px] max-h-[70vh] rounded-[12px] p-5 z-10' ref={clickOutSide}>
              <SearchBox/>
              
              <div className='mt-4'>
                <p className='font-opensans font-medium text-base text-white'>Recent Search</p>
              </div>
              </div>
            }
        </div>
        <div className='flex items-center justify-center xl:hidden w-8 h-8 rounded-full bg-input_color font-opensans font-normal text-base text-black relative'>
            <div onClick={()=>setOpen(!show)}>
              <div><SearchIcon/> </div>
            </div>
            {
              open && <div className='absolute top-0 xl:top-[-20px] left-[-210px] xl:left-[-200px] w-[250px] bg-hover_color text-white shadow-md min-h-[300px] max-h-[70vh] rounded-[12px] p-2 z-10' ref={clickOutSide}>
              <SearchBox/>
              
              <div className='mt-4'>
                <p className='font-opensans font-medium text-base text-white'>Recent Search</p>
              </div>
              </div>
            }
        </div>
    </div>
  )
}

export default Header
