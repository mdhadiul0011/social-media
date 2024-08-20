import React, { useState } from 'react'
import { useReVerificationMutation } from '../../features/api/AuthApi'
import { useSelector } from 'react-redux'

function ReAuth() {
    const usersInfo = useSelector((state)=> state.registration.userInfo)  
    const [reVerification] = useReVerificationMutation()
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const resendCode = async ()=> {
        try {
            const result = await reVerification(usersInfo.token).unwrap()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='w-full p-2 bg-hover_color shadow-md flex justify-center items-center mt-5 rounded-md'>
        <div className='text-center'>
            <h3 className='font-opensans font-medium text-bg'>Your account is not verified, Please acitvate your account</h3>
            <button onClick={resendCode} className='bg-opacity-0 font-opensans font-normal text-sm text-blue border-none hover:underline'>Click here to re-send verification link</button>
        </div>
    </div>
  )
}

export default ReAuth
