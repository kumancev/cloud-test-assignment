import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Step = {
  id: number
  state: 'active' | 'completed' | 'notComplete'
}

export type StepperState = {
  steps: Step[]
}

const initialState: StepperState = {
  steps: [
    { id: 1, state: 'active' },
    { id: 2, state: 'notComplete' },
    { id: 3, state: 'notComplete' },
  ],
}
export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    updateStepState: (
      state: StepperState,
      action: PayloadAction<{
        stepId: number
        newState: 'active' | 'completed'
      }>
    ) => {
      const { stepId, newState } = action.payload
      const step = state.steps.find((step) => step.id === stepId)
      if (step) {
        step.state = newState
      }
    },
  },
})
export const { updateStepState } = stepperSlice.actions
export default stepperSlice.reducer
