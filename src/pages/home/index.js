import Header from "../../components/Header"
import styles from "./Home.module.scss"
import Relogio from "../../assets/inicial.png"

export default function Home() {
  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil"
        imagem={Relogio}
        className={styles.header}
      />
    </div>
  )
}