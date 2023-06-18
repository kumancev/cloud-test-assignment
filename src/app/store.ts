import { configureStore } from '@reduxjs/toolkit'
import stepperReducer from '../features/stepper/stepperSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
