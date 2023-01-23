import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { AuthorizationResponse } from '../../types/to-do'
import { UserCredentials } from '../../types/to-do'

export const authorizationApi=createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/user/'
    }),
    reducerPath:'authorizationApi',
    endpoints: (builder) => ({
        login: builder.mutation<AuthorizationResponse, UserCredentials>({
            query: (userCredentials) => ({
                url: 'login',
                method: 'POST',
                body: userCredentials
            })
        }),
        registerUser: builder.mutation<AuthorizationResponse, UserCredentials>({
            query: (userData) => ({
                url: 'registration',
                method: 'POST',
                body: userData
            })
        })
    })

})
export const {
    useLoginMutation,
    useRegisterUserMutation
}=authorizationApi
