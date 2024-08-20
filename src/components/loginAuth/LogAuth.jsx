import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import {useFormik} from "formik"
import { signIn } from '../../validation/regvalidation'
import {useLogedInUserMutation } from '../../features/api/AuthApi'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { logedInUsers } from '../../features/users/authSlice'

const initialState = {
    email: "",
    password: "",
}

function LogAuth() {
    const [logedInUser, {isLoading}] = useLogedInUserMutation();
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const loginUser = async ()=> {
        const logedInMutation = await logedInUser({
            email: formik.values.email,
            password: formik.values.password,
        })
        
        if(logedInMutation.error?.data?.message){
            toast(logedInMutation.error?.data?.message, {
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
                
                return
        }
        const {message, ...rest} = logedInMutation?.data
        localStorage.setItem('user', JSON.stringify(rest))
        dispatch(logedInUsers(rest))
         navigate('/')
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: signIn,
        onSubmit: ()=> {
           loginUser()
        }
    })

    const {errors, touched} = formik;
  return (
    <div className='w-full shadow-md p-10'>
    <ToastContainer/>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input className={errors.email && touched.email ? 'w-full focus:outline-none border border-line_color px-4 py-3 rounded-md' : 'w-full focus:outline-none border border-line_color mb-5 px-4 py-3 rounded-md'} type='email' placeholder='example@gmail.com' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='email' value={formik.values.email}/>
                {errors.email && touched.email && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.email}</p>}

                <input className={errors.password && touched.password ? 'w-full focus:outline-none border border-line_color px-4 py-3 rounded-md' : 'w-full focus:outline-none border border-line_color mb-5 px-4 py-3 rounded-md'} type='password' placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='password' value={formik.values.password}/>
                {errors.password && touched.password && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.password}</p>}
            </div>
            <div className='text-center'>
                <button type='submit' className='w-full text-center text-white bg-secondary_bg rounded-full py-2 mt-5'>Login</button>

                <div className='mt-4'><Link className='text-blue font-opensans font-semibold text-centertext-base' to='/forgotpass'>Forget Your Password</Link></div>

                <p className='mt-4 text-center font-opensans text-base text-black'>Don't have an account? Please <Link className='text-blue font-opensans font-semibold underline' to='/registration'>Sign up</Link></p>
            </div>
        </form>
    </div>
  )
}

export default LogAuth
