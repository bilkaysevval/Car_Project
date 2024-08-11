import { configureStore } from "@reduxjs/toolkit";
import categoryAPI from "../APIs/categoryAPI";
import vehicleAPI from "../APIs/vehicleAPI";
import { vehicleReducer } from "./redux/vehicleSlice";
import { categoryReducer } from "./redux/categorySlice";
import accountAPI from "../APIs/accountAPI";

export const store = configureStore({
    reducer: {
        vehicleStore: vehicleReducer,
        categoryStore: categoryReducer,
        // accountStore: accountReducer,

        [categoryAPI.reducerPath]: categoryAPI.reducer,
        [vehicleAPI.reducerPath]: vehicleAPI.reducer,
        [accountAPI.reducerPath]: accountAPI.reducer
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryAPI.middleware, vehicleAPI.middleware, accountAPI.middleware)
})