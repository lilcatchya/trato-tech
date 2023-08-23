import styles from './Footer.module.scss'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <FaFacebook { ...iconeProps } />
        <FaTwitter { ...iconeProps } />
        <FaInstagram { ...iconeProps } />
      </div>
      <span>
        Desenvolvido por Alura.
      </span>
    </div>
  )
}