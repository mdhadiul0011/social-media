import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../../../public/svg/SearchIcon'

function SearchBox() {
  const [iconVisible, setIconVisible] = useState(true)
  const inputref = useRef(null)

  useEffect(()=>{
    inputref.current.focus()
  }, [])

  return (
    <div className='flex items-center gap-3 w-[100%] rounded-full bg-input_color font-opensans font-normal text-base text-black px-6'>
      <div><input ref={inputref} type='text' placeholder='Search..' className='px-2 py-3 outline-none border-none rounded-full bg-input_color w-[100%]' onFocus={()=>setIconVisible(false)} onBlur={()=> setIconVisible(true)}/> </div>
      {
        iconVisible && <div className='text-secondary_color hidden lg:block absolute right-10' onClick={()=>inputref.current.focus()}><SearchIcon/> </div>
      }
    </div>
  )
}

export default SearchBox
