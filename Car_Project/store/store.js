import { configureStore } from "@reduxjs/toolkit";
import categoryAPI from "../APIs/categoryAPI";
import vehicleAPI from "../APIs/vehicleAPI";
import { vehicleReducer } from "./redux/vehicleSlice";
import { categoryReducer } from "./redux/categorySlice";

export const store = configureStore({
    reducer: {
        vehicleStore: vehicleReducer,
        categoryStore: categoryReducer,

        [categoryAPI.reducerPath]: categoryAPI.reducer,
        [vehicleAPI.reducerPath]: vehicleAPI.reducer
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryAPI.middleware, vehicleAPI.middleware)
})