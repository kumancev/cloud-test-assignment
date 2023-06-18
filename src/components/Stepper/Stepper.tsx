import checkIcon from '@assets/check-icon.svg'
import dotIcon from '@assets/dot-icon.svg'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateStepState } from '../../features/stepper/stepperSlice'
import './index.css'

const Stepper = () => {
  const steps = useAppSelector((state) => state.stepper.steps)
  const dispatch = useAppDispatch()

  const handleStepClick = (stepId: number) => {
    dispatch(updateStepState({ stepId, newState: 'completed' }))
  }

  return (
    <div className="stepper-wrapper">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`stepper-item ${step.state}`}
          onClick={() => handleStepClick(step.id)}
        >
          <div className="step-counter">
            {step.state === 'completed' && <img src={checkIcon} alt="check" />}
            {step.state === 'active' && <img src={dotIcon} alt="dot" />}
          </div>
          <div className="step-name">{step.id}</div>
        </div>
      ))}
    </div>
  )
}

export default Stepper
