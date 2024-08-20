import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import { forgetPass } from '../../validation/regvalidation';
import { useResetpassMutation } from '../../features/api/AuthApi';

function ForgetPass({setLoading, setError, setUser, error, setVisible}) {
    const [matchUser] = useResetpassMutation()
    const initialState = ({
        email: ""
    });

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: forgetPass,
        onSubmit: ()=> {
            finduser();
        }
    })

    const finduser = async () => {
        try {
            setLoading(true)
            const result = await matchUser(formik.values.email).unwrap()
            setUser(result);
            setError("")
            setVisible(1)
        } catch (error) {
            setError(error?.data?.message);
        }
    }

    const {errors, touched} = formik

  return (
    <div className='min-w-[350px] w-[550px] px-6 py-4 shadow-lg'>
        <h2 className='font-opensans font-semibold text-black text-lg border-b border-black pb-2'>Find Your Account</h2>
        <p className='font-opensans font-normal text-black text-base mt-3'>Please enter your email address or mobile number to find your account</p>
        <form onSubmit={formik.handleSubmit}>
            <div className='border-b border-black pb-4'>
                <input name='email' type='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} autoComplete="off" className='w-full px-2 py-2 focus:outline-none mt-5 rounded-md' placeholder='Email address or phone number'/>

                {errors.email && touched.email && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.email}</p>}
                {error && <p className='font-opensans text-sm text-red font-normal my-2'>{error}</p>}
            </div>
            <div className='w-[100%] flex justify-between mt-5'>
                <Link to={'/login'} className='w-[48%]'>
                    <button className='w-full font-opensans font-medium text-base text-black px-2 py-2 t uppercase rounded-md shadow-xl'>cancel</button>
                </Link>
                <button type="submit" className='w-[48%] font-opensans font-medium text-base ext-black px-2 py-2 t uppercase rounded-md shadow-xl'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default ForgetPass
