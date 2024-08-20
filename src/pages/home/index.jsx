import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import HomePost from '../../components/HomeComponents/PostPart'
import ReAuth from '../../components/reauth'

function Home({setVisible}) {
  const usersInfo = useSelector((state)=> state.registration.userInfo)  
  return (
    <div className=''>
        <Helmet>
            <title>Home</title>
        </Helmet>

        { usersInfo.verified === false && <ReAuth/> }
        
        <div className='grid grid-cols-[3fr] box-border gap-x-12'>
          <div><HomePost setVisible={setVisible}/></div>
        </div>
    </div>
  )
}

export default Home
