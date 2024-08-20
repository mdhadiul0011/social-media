import React from 'react'

function LeftProfile() {
  return (
    <div>
        <div className='w-16 h-16 xl:w-28 xl:h-28 rounded-full bg-text_color mx-auto cursor-pointer'></div>
        <div className='text-center mt-3'>
            <h2 className='font-opensans font-bold text-base xl:text-xl'>Md. Hadiul Islam</h2>
            <p className='font-opensans text-sm xl:text-base text-secondary_color'>hadiul@gmail.com</p>
        </div>
    </div>
  )
}

export default LeftProfile
