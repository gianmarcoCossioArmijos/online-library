import { configureStore } from "@reduxjs/toolkit"
import asideSlice from "./asideSlice"
import bookSlice from "./bookSlice"

export const store = configureStore({
    reducer: {
       aside: asideSlice,
       book: bookSlice
    }
})