import { configureStore } from "@reduxjs/toolkit";
import categoryAPI from "../APIs/categoryAPI";
import vehicleAPI from "../APIs/vehicleAPI";

export const store = configureStore({
    reducer: {
        [categoryAPI.reducerPath]: categoryAPI.reducer,
        [vehicleAPI.reducerPath]: vehicleAPI.reducer
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryAPI.middleware, vehicleAPI.middleware)
})