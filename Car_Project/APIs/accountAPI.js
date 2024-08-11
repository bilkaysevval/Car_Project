import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountAPI = createApi({
    reducerPath: "accountApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6b45-78-190-146-168.ngrok-free.app/api/',
    }),
    endpoints: (builder) => ({
        CheckTrueAdmin: builder.mutation({
            query: (loginModel) => ({
                url: 'Account/CheckTrueAdmin',
                method: "POST",
                body: loginModel
            })
        })
    })
})

export const { useCheckTrueAdminMutation } = accountAPI
export default accountAPI