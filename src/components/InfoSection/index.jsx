import styles from "./styles.module.css";

import Img1 from "../../assets/info_Img_1.svg";
import Img2 from "../../assets/info_Img_2.svg";
import Img3 from "../../assets/info_Img_3.svg";
import Img4 from "../../assets/info_Img_4.svg";
import Img5 from "../../assets/info_Img_5.svg";
import Img6 from "../../assets/info_Img_6.svg";

export default function InfoSection() {
  return (
    <div className={styles.Container}>
      <h1>Benefícios Oferecidos</h1>
      <div className={styles.content}>
        <div className={styles.box}>
          <img src={Img1} alt="" />
          <h1>Auxilio funeral</h1>
          <p>apoio para famílias enlutadas</p>
        </div>
        <div className={styles.box}>
          <img src={Img2} alt="" />
          <h1>Cestas básicas</h1>
          <p>segurança alimentar para quem mais precisa</p>
        </div>
        <div className={styles.box}>
          <img src={Img3} alt="" />
          <h1>Outros benefícios</h1>
          <p>serviços diversificados</p>
        </div>
      </div>
      <h1>Como Solicitar?</h1>
      <div className={styles.content}>
        <div className={styles.box}>
          <img src={Img4} alt="" />
          <h1>Cadastre-se</h1>
          <p>no portal</p>
        </div>
        <div className={styles.box}>
          <img src={Img5} alt="" />
          <h1>Escolha o benefício</h1>
          <p>e envie os documentos</p>
        </div>
        <div className={styles.box}>
          <img src={Img6} alt="" />
          <h1>Acompanhe sua</h1>
          <p>solicitação pelo site</p>
        </div>
      </div>
    </div>
  );
}
