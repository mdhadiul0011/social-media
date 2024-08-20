import React from 'react'

function RegAuth({title, description, icon}) {
  return (
    <div>
        <div>{icon}</div>
        <div>
            <h1 className='font-opensans text-black text-2xl xl:text-6xl font-bold'>{title}</h1>
            <p className='font-opensans text-text_color text-sm xl:text-base font-normal mt-5'>{description}</p>
        </div>
    </div>
  )
}

export default RegAuth
