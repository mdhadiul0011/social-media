import React from 'react'
import { StoriesData } from './storiesData'
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'

function StoryPart() {
  return (
    <div>
        <div>
            <h3 className='font-opensans font-semibold text-base'>Story</h3>
        </div>
        <div className='w-[350px]'>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                >
                    {StoriesData.map((picdata, index)=>(
                        <SwiperSlide key={index} style={{background: `url(${picdata.bgPicture})`}} className='bg-cover bg-no-repeat bg-center w-[33%] h-[250px] mt-4 rounded-md cursor-pointer'>
                            <div className='w-7 h-7 rounded-full overflow-hidden object-cover ml-2 mt-2 border-2 border-primary_bg'>
                                <img src={picdata.frndPic}/> 
                            </div>    
                        
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    </div>
  )
}

export default StoryPart
