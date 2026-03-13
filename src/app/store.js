import { configureStore } from "@reduxjs/toolkit"
import getAllDataReducer from "@/feature/getAllData/getAllData"

export const store = configureStore({
  reducer: {
    data: getAllDataReducer,
  },
})