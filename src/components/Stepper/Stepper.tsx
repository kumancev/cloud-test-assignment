import checkIcon from '@assets/check-icon.svg'
import dotIcon from '@assets/dot-icon.svg'
import { useAppSelector } from '@app/hooks'
import './index.css'

const Stepper = () => {
  const steps = useAppSelector((state) => state.stepper.steps)

  return (
    <div className="stepper-wrapper">
      {steps.map((step) => (
        <div key={step.id} className={`stepper-item ${step.state}`}>
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
