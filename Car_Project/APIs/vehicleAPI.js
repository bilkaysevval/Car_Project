import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehicleAPI = createApi({
    reducerPath: "vehicleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6db9-88-245-17-216.ngrok-free.app/api/',
    }),
    endpoints: (builder) => ({
        GetAllVehicle: builder.query({
            query: () => ({
                url: "Vehicle/GetAllVehicle",
                method: "GET"
            })
        }),
        CreateVehicle: builder.mutation({
            query: (VehicleModel) => ({
                url: "Vehicle/CreateVehicle",
                method: "POST",
                body: VehicleModel
            })
        }),
        // VehicleModel includes name and description
        RemoveVehicle: builder.mutation({
            query: (VehicleId) => ({
                url: `Vehicle/DeleteVehicle/${VehicleId}`,
                method: "DELETE"
            })
        }),
        UpdateVehicle: builder.mutation({
            query: (model) => ({
                url: `Vehicle/UpdateVehicle/${model.VehicleId}`,
                method: "PUT",
                body: model.VehicleModel
            })
        }),
        GetVehicleById: builder.query({
            query: (vehicleId) => ({
                url: `Vehicle/Vehicle/${vehicleId}`,
                method: "GET"
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

export const { useGetAllVehicleQuery, useCreateVehicleMutation, useRemoveVehicleMutation, useUpdateVehicleMutation, useGetVehicleByIdQuery, useGetVehiclesByCategoryIdQuery } = vehicleAPI
export default vehicleAPI