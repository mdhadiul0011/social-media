import React, { useRef, useState } from 'react'
import {NavLink} from "react-router-dom"
import Settingsoption from './settingsoption'
import Outsideclick from '../../../function/outsideclick'


function LefthomeData({data}) {
    const [show, setShow] = useState(false)
    const clickoutside = useRef(null)

    Outsideclick(clickoutside, ()=>{
      setShow(false)
    })

    const ItemIcon = data.icon

    const settingSeparation = data.title === "Settings" && (
      <div className='relative'>
        <div onClick={()=>setShow(true)} className={`flex w-10 h-10 lg:w-auto lg:h-auto justify-around lg:justify-normal items-center lg:gap-x-4 lg:my-2 cursor-pointer hover:bg-black lg:hover:bg-hover_color lg:py-3 lg:px-8 rounded-full transition-all ease-linear duration-300 ${ show && "bg-hover_color"}`}>
          <div>
            <ItemIcon/>
          </div>
          <div className='hidden lg:block'>
            <p className='font-opensans font-semibold text-sm xl:text-base'>
                {data.title}
            </p>
          </div>
        </div>
        <div className='absolute top-14 lg:top-16 lg:left-0 -left-[180px] ' ref={clickoutside}>
          {
            show && <div><Settingsoption/></div>
          }
        </div>
      </div>
    )

  return (
    <>
    {settingSeparation ? settingSeparation : 
    <NavLink to={data.to}  className={`flex w-10 h-10 lg:w-auto lg:h-auto justify-around lg:justify-normal items-center lg:gap-x-4 lg:my-2 cursor-pointer hover:bg-black lg:hover:bg-hover_color lg:py-3 lg:px-8 rounded-full transition-all ease-linear duration-300 ${ show && "bg-hover_color"}`}>
        <div>
          <ItemIcon/>
        </div>
        <div className='hidden lg:block'>
          <p className='font-opensans font-semibold text-sm xl:text-base'>
              {data.title}
          </p>
        </div>
      </NavLink>}
      
    </>
  )
}

export default LefthomeData
