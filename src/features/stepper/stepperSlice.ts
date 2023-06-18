import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Step = {
  id: number
  state: 'active' | 'completed' | 'notCompleted'
}

export type StepperState = {
  steps: Step[]
}

const initialState: StepperState = {
  steps: [
    { id: 1, state: 'active' },
    { id: 2, state: 'notCompleted' },
    { id: 3, state: 'notCompleted' },
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
        newState: 'active' | 'completed' | 'notCompleted'
      }>
    ) => {
      const { stepId, newState } = action.payload
      const step = state.steps.find((step) => step.id === stepId)
      if (step) {
        step.state = newState
      }
    },
    resetStepState: () => {
      return initialState
    },
  },
})
export const { updateStepState, resetStepState } = stepperSlice.actions
export default stepperSlice.reducer
