import { useDispatch, useSelector } from 'react-redux'
import { resetStepState, updateStepState } from '@features/stepper/stepperSlice'
import { Step } from '@features/stepper/stepperSlice'
import { RootState } from '@app/store'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { sendData } from '@helpers/sendData'
import styles from './index.module.scss'

const Step2 = () => {
  const dispatch = useDispatch()
  const steps = useSelector((state: RootState) => state.stepper.steps)

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data: any, e: any) => {
    console.log(data)
    handleCompleteStep()
    sendData('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
      test: '123',
    })
    redirectSubmit(e)
  }

  const redirectSubmit = (e: any) => {
    e.preventDefault()
    navigate('/')
  }

  const currentStepIndex = steps.findIndex(
    (step: Step) => step.state === 'active'
  )
  const currentStep = steps[currentStepIndex]
  const previousStep = steps[currentStepIndex - 1]

  const handleCompleteStep = () => {
    dispatch(resetStepState())
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
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="field-nickname">Nickname</label>
        <input id="field-nickname" type="text" {...register('nickname')} />

        <label htmlFor="field-name">Name</label>
        <input id="field-name" type="text" {...register('name')} />

        <label htmlFor="field-surname">Surname</label>
        <input id="field-surname" type="text" {...register('surname')} />

        <div className={styles.btnGroup}>
          <button className={styles.btnBack} onClick={handleGoBack}>
            Назад
          </button>
          <button type="submit">Далее</button>
        </div>
      </form>
    </>
  )
}

export default Step2
