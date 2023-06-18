import { useDispatch, useSelector } from 'react-redux'
import { updateStepState } from '@features/stepper/stepperSlice'
import { Step } from '@features/stepper/stepperSlice'
import { RootState } from '@app/store'

const Step2 = () => {
  const dispatch = useDispatch()
  const steps = useSelector((state: RootState) => state.stepper.steps)

  const currentStepIndex = steps.findIndex(
    (step: Step) => step.state === 'active'
  )
  const currentStep = steps[currentStepIndex]
  const nextStep = steps[currentStepIndex + 1]
  const previousStep = steps[currentStepIndex - 1]

  const handleCompleteStep = () => {
    dispatch(updateStepState({ stepId: currentStep.id, newState: 'completed' }))

    if (nextStep) {
      dispatch(updateStepState({ stepId: nextStep.id, newState: 'active' }))
    }
  }

  const handleGoBack = () => {
    if (previousStep) {
      dispatch(
        updateStepState({ stepId: currentStep.id, newState: 'notCompleted' })
      )
      dispatch(updateStepState({ stepId: previousStep.id, newState: 'active' }))
    }
  }

  return (
    <div>
      <div>Step 2</div>
      <button onClick={handleCompleteStep}>Complete Step</button>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default Step2
