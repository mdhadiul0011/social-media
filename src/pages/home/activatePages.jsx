import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import HomePost from '../../components/HomeComponents/PostPart'
import { useNavigate, useParams } from 'react-router-dom'
import { useVerifiedUserMutation } from '../../features/api/AuthApi'
import { logedInUsers } from '../../features/users/authSlice'
import AuthActivate from './authactivate'

function ActivatePages() {
  const usersInfo = useSelector((state)=> state.registration.userInfo) 
  const [verifiedUser] = useVerifiedUserMutation()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const {token} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(token);
  console.log("===>",usersInfo);

  useEffect(()=>{
    tokenactivate()
  },[])

  const tokenactivate = async () => {
    try {
      setLoading(true)
      const result = await verifiedUser({token, userToken: usersInfo.token}).unwrap()
      console.log(result);
      setError("")
      localStorage.setItem("user", JSON.stringify({...usersInfo, verified: true}))
      dispatch(logedInUsers({...usersInfo, verified: true}))
      setTimeout(()=>{
        navigate('/')
      }, 3000)
    } catch (error) {
      setError(error);
      setTimeout(()=>{
        navigate('/')
      }, 3000)
    }
  }

  return (
    <div className=''>
        <Helmet>
            <title>Home</title>
        </Helmet>

        { success && <AuthActivate type="Success" head="Account Successfully Activated" text={success} loading={loading}/>}
        { error && <AuthActivate type="Error" head="Account Activation Failed" text={success} loading={loading}/> }

        <div className='grid grid-cols-[3fr] box-border gap-x-12'>
          <div><HomePost/></div>
        </div>
    </div>
  )
}

export default ActivatePages