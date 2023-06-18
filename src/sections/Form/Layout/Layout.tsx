import { ReactNode } from 'react'
import styles from './index.module.scss'
import Stepper from '@components/Stepper/Stepper'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Stepper />
        {children}
      </div>
    </div>
  )
}
