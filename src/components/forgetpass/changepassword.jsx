import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import { password } from '../../validation/regvalidation';
import { useChangePasswordMutation } from '../../features/api/AuthApi';
import { Bounce, toast, ToastContainer } from 'react-toastify';

function Changepassword({
    user,
    setLoading,
}) {
    const [changepass] = useChangePasswordMutation()
    const navigate = useNavigate()

    const initialState = ({
        password: ""
    });

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: password,
        onSubmit: ()=> {
            changeOldPassword()
        }
    })

    const changeOldPassword = async () => {
        try {
            const result = await changepass({
                email: user.email,
                password: formik.values.password
            }).unwrap()
            setLoading(true)
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
                    navigate("/")
                }, 2000)
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
            <h2 className='font-opensans font-semibold text-black text-lg border-b border-black pb-2'>Change Your Password</h2>
            <p className='font-opensans font-normal text-black text-base mt-3'>Please choose a strong password</p>
            <form onSubmit={formik.handleSubmit}>
                <div className='border-b border-black pb-4'>
                    <input name='password' type='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} autoComplete="off" className='w-full px-2 py-2 focus:outline-none mt-5 rounded-md' placeholder='Type your new password'/>

                    {errors.password && touched.password && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.password}</p>}
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

export default Changepassword