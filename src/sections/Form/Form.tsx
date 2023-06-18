import { Layout } from './Layout/Layout'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store'
import { Step } from '@features/stepper/stepperSlice'
import Step1 from './Step1/Step1'
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'

const Form = () => {
  const steps = useSelector((state: RootState) => state.stepper.steps)
  const activeStep = steps.find((step: Step) => step.state === 'active')

  return (
    <Layout>
      {activeStep?.id === 1 && <Step1 />}
      {activeStep?.id === 2 && <Step2 />}
      {activeStep?.id === 3 && <Step3 />}
    </Layout>
  )
}

export default Form
