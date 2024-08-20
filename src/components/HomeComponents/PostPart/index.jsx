import React from 'react'
import Header from './header'
import Post from './post'
import './style.css'

function HomePost({setVisible}) {
  return (
    <div>
      <Post setVisible={setVisible}/>
    </div>
  )
}

export default HomePost
