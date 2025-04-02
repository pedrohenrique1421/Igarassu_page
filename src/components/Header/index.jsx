import styles from "./styles.module.css";

import Img from "../../assets/Logo_Igarassu.svg";

export default function Header() {
  return (
    <div className={styles.Container}>
      <img src={Img} alt="Logo" />
      <div className={styles.navBar}>
        <a href="#">Solicitar Beneficio</a>
        <span />
        <a href="#">Acompanhar Pedido</a>
      </div>
      <button>Entrar | Cadastrar</button>
    </div>
  );
}
