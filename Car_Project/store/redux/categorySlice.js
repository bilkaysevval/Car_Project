import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    categoryId: "",
}

export const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {
        getAllCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const { getAllCategories } = categorySlice.actions
export const categoryReducer = categorySlice.reducer