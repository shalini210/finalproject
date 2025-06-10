import { configureStore } from '@reduxjs/toolkit'
import  adminreducer from "../slices/Adminslice"
export const store = configureStore({
  reducer: {
    admin:adminreducer
  },
})