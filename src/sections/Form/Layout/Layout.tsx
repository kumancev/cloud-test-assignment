import { ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};