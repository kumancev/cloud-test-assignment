import folderIcon from '@assets/folder-icon.svg'
import styles from './index.module.scss'

type UserLinkProps = {
  name: string
  url: string
}

const UserLink = ({ name, url }: UserLinkProps) => {
  return (
    <div className={styles.linkWrapper}>
      <img className={styles.folderIcon} src={folderIcon} alt="link" />
      <a
        className={styles.linkName}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  )
}

export default UserLink
