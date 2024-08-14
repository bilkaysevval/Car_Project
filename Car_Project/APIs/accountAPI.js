import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const accountAPI = createApi({
    reducerPath: "accountApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://698d-78-190-148-55.ngrok-free.app/api/',
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