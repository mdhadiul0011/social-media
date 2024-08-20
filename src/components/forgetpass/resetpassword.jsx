import React from 'react'
import { Link } from 'react-router-dom'
import { useSendCodeMutation } from '../../features/api/AuthApi'
import { Bounce, toast, ToastContainer } from 'react-toastify'

function Resetpassword({user, success, setSuccess, loading, setLoading, setVisible, setError, error}) {
    const [sendCode] = useSendCodeMutation()

    const handleResetCode = async () => {
        try {
            const result = await sendCode(user.email).unwrap()
            setSuccess(result);
            setLoading(true)
            setError("")
            toast(result.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            setTimeout(()=>{
                setVisible(2)
            }, 2000)
        } catch (error) {
            toast(error?.data?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
    }
  return (
    <>
        <ToastContainer/>
        <div className='min-w-[350px] w-[550px] px-6 py-4 shadow-lg'>
            <h2 className='font-opensans font-semibold text-black text-lg border-b border-black pb-2'>Reset Password</h2>
            <p className='font-opensans font-normal text-black text-base mt-3'>How do you want to receive the code for reset your password?</p>
            <div className='mt-5'>
                <div className='w-[80px] h-[80px] rounded-full bg-black mx-auto overflow-hidden'>
                    <img src={user.profilePicture} className='w-full h-full object-cover'/>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <input type='radio' defaultChecked={true}/>
                    <span className='font-opensans font-normal text-sm text-black ml-2'>{user.email}</span>
                </div>
            </div>
            <div className='w-[100%] flex justify-between mt-5'>
                <Link to={'/login'} className='w-[48%]'>
                    <button className='w-full font-opensans font-medium text-base text-black px-2 py-2 t uppercase rounded-md shadow-xl'>not you?</button>
                </Link>
                <button onClick={handleResetCode} type="submit" className='w-[48%] font-opensans font-medium text-base ext-black px-2 py-2 t uppercase rounded-md shadow-xl'>yes</button>
            </div>
        </div>
    </>
  )
}

export default Resetpassword
