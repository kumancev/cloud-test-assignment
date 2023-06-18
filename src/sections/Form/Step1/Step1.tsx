import { useDispatch, useSelector } from 'react-redux'
import { updateStepState } from '@features/stepper/stepperSlice'
import { Step } from '@features/stepper/stepperSlice'
import { useForm, Controller } from 'react-hook-form'
import { RootState } from '@app/store'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: '44px',
    padding: '0 11px',
    background: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.16)',
    borderRadius: '0.25em',
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    padding: 0,
  }),
  clearIndicator: (base: any) => ({
    ...base,
    padding: 0,
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: '#fff',
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: 0,
  }),
  input: (base: any) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  option: (base: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...base,
      height: '44px',
      backgroundColor: isFocused ? 'rgba(0, 0, 0, 0.16)' : null,
      color: '#333333',
    }
  },
}

const options = [
  { id: 'field-sex-option-man', value: 'man', label: 'man' },
  { id: 'field-sex-option-woman', value: 'woman', label: 'woman' },
]

const Step1 = () => {
  const { register, handleSubmit, control } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    console.log(data)
    handleCompleteStep()
  }

  const redirectSubmit = (e: any) => {
    e.preventDefault()
    navigate('/')
  }

  const dispatch = useDispatch()
  const steps = useSelector((state: RootState) => state.stepper.steps)

  const currentStepIndex = steps.findIndex(
    (step: Step) => step.state === 'active'
  )
  const currentStep = steps[currentStepIndex]
  const nextStep = steps[currentStepIndex + 1]

  const handleCompleteStep = () => {
    dispatch(updateStepState({ stepId: currentStep.id, newState: 'completed' }))

    if (nextStep) {
      dispatch(updateStepState({ stepId: nextStep.id, newState: 'active' }))
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

        <label htmlFor="field-sex">Sex</label>
        <div id="field-sex" style={{ width: '400px' }}>
          <Controller
            name="field-sex"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Не выбрано"
                options={options}
                value={options.find((c) => c.value === value)}
                onChange={(val) => onChange(val!.value)}
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null,
                }}
                menuIsOpen={true}
              />
            )}
            rules={{ required: true }}
          />
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btnBack} onClick={redirectSubmit}>
            Назад
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Step1
