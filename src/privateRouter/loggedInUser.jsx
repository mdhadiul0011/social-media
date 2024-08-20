import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/login'
import { useSelector } from 'react-redux'

function LoggedInUser() {
    const {userInfo} = useSelector((state)=>state.registration)
    return userInfo ? <Outlet/> : <Login/>
}

export default LoggedInUser
