import { Layout } from './Layout/Layout'
import Step1 from './Step1/Step1'
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'

const currentStep: any = 1

const Form = () => {
  return (
    <Layout>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </Layout>
  )
}

export default Form
