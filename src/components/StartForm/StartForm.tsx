import { useForm } from 'react-hook-form'
import './index.module.scss'

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="phone">Номер телефона</label>
        <input
          {...register('phone', { required: true, maxLength: 11 })}
          placeholder="+7 900 201-23-33"
        />
        {errors.phone && <p>Phone must equal 11 numbers</p>}

        <label htmlFor="email">Email</label>
        <input {...register('email', {})} placeholder="kumancev1@gmail.com" />
        {errors.email && <p>Email incorrect</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MyForm
