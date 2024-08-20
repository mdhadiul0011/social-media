import React from 'react'
import { Moon } from '../../../public/svg/Moon'
import { BackIcon } from '../../../public/svg/backIcon'

export default function DispalyMood({setVisible}) {
  return (
    <div>
    <div className='bg-hover_color w-[270px] xl:w-[330px] py-4 px-5 shadow-md rounded-md'>
        <div className='flex items-center gap-x-4'>
            <div className='w-[40px] h-[40px] rounded-full bg-secondary_bg flex items-center justify-center shadow-lg cursor-pointer' onClick={()=>setVisible(false)}><BackIcon/></div>
            <div>
                <h2 className='font-opensans font-medium xl:font-bold text-base xl:text-lg'>Display & Accessibility</h2>
            </div>
        </div>
        <div className='flex items-center justify-between mt-4 cursor-pointer'>
            <div><h3 className='font-opensans font-medium text-base'>DarkMode</h3></div>
            <div className='w-[40px] h-[40px] rounded-full bg-secondary_bg flex items-center justify-center shadow-lg'><Moon/></div>
        </div>
        <p className='font-opensans font-normla text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, architecto at. Saepe ut vero ipsa perspiciatis ullam. Et, ipsam? Mollitia?</p>

        <div className='mt-4'>
            <div className='flex items-center justify-between mt-2'>
                <label htmlFor='white' className='font-opensans font-medium text-base'>Off</label>
                <input id='white' name='radio' type='radio' />
            </div>
            <div className='flex items-center justify-between mt-2'>
                <label htmlFor='dark' className='font-opensans font-medium text-base'>On</label>
                <input id="dark" name='radio' type='radio' />
            </div>
        </div>
    </div>
    </div>
  )
}
