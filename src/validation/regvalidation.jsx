import * as Yup from "yup"


export const signUp = Yup.object({
    fName: Yup.string().min(2).max(15).required("Please Enter Your First Name"),
    lName: Yup.string().min(2).max(15).required("Please Enter Your Last Name"),
    email: Yup.string().email().required("Please Enter Your email"),
    password: Yup.string().min(6).max(15).required("Please Enter Your Password"),
    gender: Yup.string().required("Please Select Your Gender"),
})


export const signIn = Yup.object({
    email: Yup.string().email().required("Please Enter Your email"),
    password: Yup.string().min(6).max(15).required("Please Enter Your Password"),
})

export const forgetPass = Yup.object({
    email: Yup.string().email().required("Please Enter Your email"),
})

export const userCode = Yup.object({
    code: Yup.string().min(5, "The code must be 5 characters").max(5, "The code must be 5 characters").required("Please Enter Your code"),
})

export const password = Yup.object({
    password: Yup.string().min(6).max(15).required("Please Enter Your Strong Password"),
})