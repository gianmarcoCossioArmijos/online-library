import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action) => {
             
            const newBook = action.payload;
            return newBook;
        },
        removeBook : (state) => {

            const newBook = "";
            return newBook;
        }
    }
})

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;