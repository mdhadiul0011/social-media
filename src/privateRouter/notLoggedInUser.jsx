import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function NotLoggedInUser() {
  const {userInfo} = useSelector((state)=>state.registration)
  return userInfo ? <Navigate to='/'/> : <Outlet/>
}

export default NotLoggedInUser
