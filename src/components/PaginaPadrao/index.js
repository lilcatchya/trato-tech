import { Outlet } from "react-router-dom"
import styles from "./PaginaPadrao.module.scss"

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
    </div>
  )
}