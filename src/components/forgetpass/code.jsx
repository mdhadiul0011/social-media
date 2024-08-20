import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import { forgetPass, userCode } from '../../validation/regvalidation';
import { useVerifyResetCodeMutation } from '../../features/api/AuthApi';
import { Bounce, toast, ToastContainer } from 'react-toastify';

function Secretcode({
    user,
    setSuccess,
    success,
    loading,
    setError,
    error,
    setVisible,
    setLoading,
}) {
    const [verifycode] = useVerifyResetCodeMutation()
    const initialState = ({
        code: ""
    });

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: userCode,
        onSubmit: ()=> {
            verifyResetCode()
        }
    })

    const verifyResetCode = async ()=> {
        try {
            const result = await verifycode({
                email: user.email,
                code: formik.values.code
            }).unwrap()
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
            setError("")
            setTimeout(()=>{
                setVisible(3)
            }, 2000)
            setLoading(true)
        } catch (error) {
            toast(error.data.message, {
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

    const {errors, touched} = formik
  return (
    <>
        <ToastContainer/>
        <div className='min-w-[350px] w-[550px] px-6 py-4 shadow-lg'>
            <h2 className='font-opensans font-semibold text-black text-lg border-b border-black pb-2'>Code Verification</h2>
            <p className='font-opensans font-normal text-black text-base mt-3'>Please enter your code that has been sent to your email.</p>
            <form onSubmit={formik.handleSubmit}>
                <div className='border-b border-black pb-4'>
                    <input name='code' type='text' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.code} autoComplete="off" className='w-full px-2 py-2 focus:outline-none mt-5 rounded-md' placeholder='Please enter your new code'/>

                    {errors.code && touched.code && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.code}</p>}
                </div>
                <div className='w-[100%] flex justify-between mt-5'>
                    <Link to={'/login'} className='w-[48%]'>
                        <button className='w-full font-opensans font-medium text-base text-black px-2 py-2 t uppercase rounded-md shadow-xl'>cancel</button>
                    </Link>
                    <button type="submit" className='w-[48%] font-opensans font-medium text-base ext-black px-2 py-2 t uppercase rounded-md shadow-xl'>submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Secretcode