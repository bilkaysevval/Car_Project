import { createApi, fetchBaseQuery } from '@reduxjs/toolkit'

export const categoryAPI = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    endpoints: (builder) => ({
        GetAllCategory: builder.query({
            query: () => ({
                url: "Category",
                method: "GET"
            })
        }),
        CreateCategory: builder.mutation({
            query: (categoryModel) => ({
                url: "Category",
                method: "POST",
                body: categoryModel
            })
        }),
        // categoryModel includes name and description
        RemoveCategory: builder.mutation({
            query: (categoryId) => ({
                url: `Category/${categoryId}`,
                method: "DELETE"
            })
        }),
        UpdateCategory: builder.mutation({
            query: (model) => ({
                url: `Category/${model.categoryId}`,
                method: "PUT",
                body: model.categoryModel
            })
        }),
        GetVehiclesByCategoryId: builder.query({
            query: (categoryId) => ({
                url: `Category/GetVehiclesByCategoryId/${categoryId}`,
                method: "GET"
            })
        })
    })
})

export const { useGetAllCategoryQuery, useCreateCategoryMutation, useRemoveCategoryMutation, useUpdateCategoryMutation, useGetVehiclesByCategoryIdQuery } = categoryAPI
export default categoryAPI