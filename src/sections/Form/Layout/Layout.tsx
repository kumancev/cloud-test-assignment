import { ReactNode } from 'react'
import styles from './index.module.scss'
import Stepper from '@components/Stepper/Stepper'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <Stepper />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
