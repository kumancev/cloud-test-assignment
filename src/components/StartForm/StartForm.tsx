import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const MyForm = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data: any, e: any) => {
    console.log(data)
    e.preventDefault()
    navigate('/create')
  }

  return (
    <>
      <form className={styles.startForm} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="phone">Номер телефона</label>
        <input {...register('phone')} placeholder="+7 900 201-23-33" />
        <label htmlFor="email">Email</label>
        <input {...register('email')} placeholder="kumancev1@gmail.com" />
        <button type="submit">Начать</button>
      </form>
    </>
  )
}

export default MyForm
