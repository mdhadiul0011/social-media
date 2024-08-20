import React from 'react'
import FriendsRight from './friendsRight'
import StoryPart from './stories'

function HomeRight() {
  return (
    <div>
      <div>
        <FriendsRight/>
      </div>
      <div className='mt-10'>
        <StoryPart/>
      </div>
    </div>
  )
}

export default HomeRight
