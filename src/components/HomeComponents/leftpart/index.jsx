import React from 'react'
import LeftProfile from './leftProfile'
import LefthomeData from './lefthomeData'
import LeftData from './data'

function HomeLeft() {
  return (
    <div className=''>
      <div className='mb-10'>
        <LeftProfile/>
      </div>
      <div>
        {
          LeftData.map((data, index)=>(
            <LefthomeData key={index} data={data}/>
          ))
        }
        
      </div>
    </div>
  )
}

export default HomeLeft
