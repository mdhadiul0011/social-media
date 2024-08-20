import React from 'react'
import { Link } from 'react-router-dom'
import { ReduceText } from '../../../../function/textLength';

function FriendsRight() {
    const originalName= "Muhammad Hadiul Islam Ashik";
    const reduceText = ReduceText(originalName, 15)
  return (
    <div>
        <div className='flex items-center justify-between'>
            <div> 
                <h3 className='font-opensans font-semibold text-base'>Friend Request</h3>
            </div>
            <div>
                <Link to='/friends' className='font-opensans font-normal text-sm border border-hover_color px-2 xl:px-4 py-2 xl:py-3 rounded-full hover:bg-hover_color transition-all ease-linear duration-100'>See All</Link>
            </div>
        </div>
        <div className=' mt-10 border-b border-hover_color pb-2 xl:pb-4'>
            <div className='flex items-center gap-x-3'>
                <div className='w-12 xl:w-16 h-12 xl:h-16 rounded-full bg-hover_color'></div>
                <div className='w-[56%]'>
                    <h4 className='font-opensans font-medium xl:font-semibold text-sm xl:text-base leading-none'>{reduceText}</h4>
                    <p className='font-opensans font-normal text-[12px] xl:text-sm leading-6 text-title_color'>21 Minutes ago</p>
                </div>
            </div>
            <div className='w-[100%] flex items-center justify-between mt-4'>
                <button className='w-[48%] font-opensans font-normal text-[12px] xl:text-sm py-2 xl:py-3 bg-hover_color rounded-full'>Accept</button>
                <button className='w-[48%] font-opensans font-normal text-[12px] xl:text-sm py-2 xl:py-3 bg-hover_color rounded-full'>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default FriendsRight
