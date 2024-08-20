import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from "formik"
import { signUp } from '../../validation/regvalidation'
import { useAddUserMutation } from '../../features/api/AuthApi'
import { Bounce, ToastContainer, toast } from 'react-toastify';


const initialState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
}


function RegForm() {
    const [ageError, setAgeError] = useState('')
    const [addUser, {isLoading}] = useAddUserMutation();
    const navigate = useNavigate()


    const registration = async ()=>{
        const signUpMutation = await addUser({
            fName: formik.values.fName,
            lName: formik.values.lName,
            email: formik.values.email,
            password: formik.values.password,
            bYear: formik.values.bYear,
            bMonth: formik.values.bMonth,
            bDay: formik.values.bDay,
            gender: formik.values.gender,
        }) 

        if(signUpMutation.error?.data?.mesage){
            toast(signUpMutation.error?.data?.mesage, {
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
        else{
            toast("Please verify your token", {
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
                setTimeout(() => {
                    navigate('/login')
                }, 3000);
        }
        
 
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: signUp,
        onSubmit: ()=> {
            const currentDate = new Date()
            const pickedDate = new Date(
                formik.values.bYear,
                formik.values.bMonth -1,
                formik.values.bDay
            )
            const adult = new Date(1970 + 18, 0, 1)
            const tooOld = new Date(1970 + 70, 0, 1)

            if(currentDate - pickedDate < adult){
                return setAgeError('You are not 18 years old');
            } else if(currentDate - pickedDate > tooOld){
                return setAgeError("You are more than 70 years old");
            }

            registration();
            formik.resetForm()
        }
    })



    const tempYears = new Date().getFullYear()
    const years = Array.from(new Array(105), (val, index)=> tempYears - index)
    const months = Array.from(new Array(12), (val, index)=> 1 + index)
    const days = ()=> {
        return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate()
    }
    const Dates = Array.from(new Array(days()), (val, index)=> 1 + index)

    const {errors, touched} = formik;
  return (
    <div className='w-full shadow-md p-10'>
    <ToastContainer/>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input className={errors.fName && touched.fName ? 'w-full focus:outline-none border border-line_color px-4 py-3 rounded-md' : 'w-full focus:outline-none border border-line_color mb-5 px-4 py-3 rounded-md'} type='text' placeholder='First Name' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='fName' value={formik.values.fName}/>
                {errors.fName && touched.fName && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.fName}</p>}

                <input className={errors.lName && touched.lName? 'w-full focus:outline-none border border-line_color px-4 py-3 rounded-md' : 'w-full focus:outline-none border border-line_color mb-5 px-4 py-3 rounded-md'} type='text' placeholder='Last Name' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='lName' value={formik.values.lName}/>
                {errors.lName && touched.lName && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.lName}</p>}

                <input className={errors.email && touched.email ? 'w-full focus:outline-none border border-line_color px-4 py-3 rounded-md' : 'w-full focus:outline-none border border-line_color mb-5 px-4 py-3 rounded-md'} type='email' placeholder='example@gmail.com' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='email' value={formik.values.email}/>
                {errors.email && touched.email && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.email}</p>}

                <input className={errors.password && touched.password ? 'w-full focus:outline-none border border-line_color px-4 py-3 rounded-md' : 'w-full focus:outline-none border border-line_color mb-5 px-4 py-3 rounded-md'} type='password' placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='password' value={formik.values.password}/>
                {errors.password && touched.password && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.password}</p>}
            </div>
            <div className='mt-4'>
                <h3 className='mb-2 font-opensans text-black text-md font-bold'>Gender</h3>
                <input id='Male' type="radio" value="male" name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off'  /> <label htmlFor="Male" className='font-opensans text-base text-black font-normal'>Male</label>

                <input id='Female' type="radio" value="female" name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' className='ml-2'/> <label htmlFor="Female" className='font-opensans text-base text-black font-normal' >Female</label>

                <input id='Others' type="radio" value="others" name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' className='ml-2'/> <label htmlFor="Others" className='font-opensans text-base text-black font-normal'>Others</label>

                {errors.gender && touched.gender && <p className='font-opensans text-sm text-red font-normal my-2'>{errors.gender}</p>}
            </div>
            <div className='mt-4'>
                <h3 className='mb-2 font-opensans text-black text-md font-bold'>Birthday</h3>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='bYear' className='border border-line_color rounded-md mr-2 py-2 focus:outline-none'>
                    <option>Year</option>
                    {years.map((year, index)=>(
                        <option key={index}>{year}</option>
                    ))}
                </select>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='bMonth' className='border border-line_color rounded-md mx-2 py-2 focus:outline-none'>
                    <option>Month</option>
                    {months.map((month, index)=>(
                        <option key={index}>{month}</option>
                    ))}
                </select>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' name='bDay' className='border border-line_color rounded-md mx-2 py-2 focus:outline-none'>
                    <option>Day</option>
                    {Dates.map((day, index)=>(
                        <option key={index}>{day}</option>
                    ))}
                </select>
                {ageError && <p className='font-opensans text-sm text-red font-normal my-2'>{ageError}</p>}
            </div>
            <div>
                <button type='submit' className='w-full text-center text-white bg-secondary_bg rounded-full py-2 mt-5'>Submit</button>
                <p className='mt-4 text-center font-opensans text-base text-black'>If you have an account, please go <Link className='text-blue font-opensans font-semibold underline' to='/login'>Sign In</Link></p>
            </div>
        </form>
    </div>
  )
}

export default RegForm
