import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
    reducerPath: "AuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL
    }),
    endpoints: (builder)=>({
        addUser: builder.mutation({
            query:(body)=>({
                url: "/api/v1/auth",
                method: "POST",
                body
            })
        }),
        logedInUser: builder.mutation({
            query:(body)=>({
                url: "/api/v1/auth/login",
                method: "POST",
                body
            })
        }),
        verifiedUser: builder.mutation({
            query:({token, userToken})=>({
                url: "/api/v1/auth/activate",
                method: "POST",
                body: {token},
                headers: {
                    Authorization : `Bearer ${userToken}`
                }
            })
        }),
        reVerification: builder.mutation({
            query:(token)=>({
                url: "/api/v1/auth/reverification",
                method: "POST",
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
        }),
        resetpass: builder.mutation({
            query:(email)=>({
                url: "/api/v1/auth/resetpass",
                method: "POST",
                body: {email}
            })
        }),
        sendCode: builder.mutation({
            query:(email)=>({
                url: "/api/v1/auth/resetcode",
                method: "POST",
                body: {email}
            })
        }),
        verifyResetCode: builder.mutation({
            query:({email, code})=>({
                url: "/api/v1/auth/verifycode",
                method: "POST",
                body: {email, code}
            })
        }),
        changePassword: builder.mutation({
            query:({email, password})=>({
                url: "/api/v1/auth/changepass",
                method: "POST",
                body: {email, password}
            })
        }),
        createUserPost: builder.mutation({
            query:({type, images, text, background, user, token})=>({
                url: "/api/v1/posts/createpost",
                method: "POST",
                body: {type, images, text, background, user,},
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }),
            transformResponse: (response)=> ({
                status: "done", 
                data: response,
            })
        }),
    })
});

export const {useAddUserMutation, useLogedInUserMutation, useVerifiedUserMutation, useReVerificationMutation, useResetpassMutation, useSendCodeMutation, useVerifyResetCodeMutation, useChangePasswordMutation, useCreateUserPostMutation} = AuthApi;