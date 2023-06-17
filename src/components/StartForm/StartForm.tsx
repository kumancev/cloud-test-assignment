import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './index.module.scss'

const MyForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="phone">Номер телефона</label>
        <input {...register('phone')} placeholder="+7 900 201-23-33" />
        <label htmlFor="email">Email</label>
        <input {...register('email')} placeholder="kumancev1@gmail.com" />
        <button>
          <Link to={`create`}>Submit</Link>
        </button>
      </form>
    </>
  )
}

export default MyForm
