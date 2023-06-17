import avatar from '@assets/avatar.png'
import StartForm from '@components/StartForm/StartForm'
import UserLink from '@components/UserLink/UserLink'
import { linkData } from '@mocks/data'
import styles from './index.module.scss'

const AboutMe = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <img className={styles.userLogo} src={avatar} alt="user avatar" />
        <div className={styles.userInfo}>
          <h3>Александр Куманцев</h3>
          <div className={styles.userLinks}>
            {linkData.map((item) => (
              <UserLink name={item.name} url={item.url} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <StartForm />
      </div>
    </>
  )
}

export default AboutMe
