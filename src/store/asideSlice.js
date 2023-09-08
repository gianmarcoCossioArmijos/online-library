import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const asideSlice = createSlice({
    name: "aside",
    initialState,
    reducers: {
        hidde: (state) => {
             
            const menu = "close";
            return menu;
        },
        show : (state) => {

            const menu = "";
            return menu;
        }
    }
})

export default asideSlice.reducer;
export const { hidde, show } = asideSlice.actions;