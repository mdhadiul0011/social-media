import React from 'react'
import {PuffLoader} from "react-spinners"

export default function AuthActivate({type ,head, text, loading}) {
  return (
    <div className='w-full h-full bg-blur fixed top-0 left-0 z-20 flex items-center justify-center'>
      <div className='bg-white text-black p-4 w-[400px] text-center rounded-md shadow-lg'>
        <h3 className={`${type === "success" ? "text-green" : "text-red"} font-opensans font-medium text-base`}>{head}</h3>
        <h5 className='font-opensans font-normal text-base mt-3'>{text}</h5>
        <PuffLoader className='m-auto mt-2' color='#21D997' size={50} loading={loading}/>
      </div>
    </div>
  )
}
