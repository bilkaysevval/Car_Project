import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const accountAPI = createApi({
    reducerPath: "accountApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://99a2-78-190-152-186.ngrok-free.app/api/',
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